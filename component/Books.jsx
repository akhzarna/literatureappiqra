import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { fetchData } from "./ApiComponent";


const ApiComponent = () => {
  const [data, setData] = useState(null);
  const [uniBook, setUniBook] = useState(null);
  const [pdfBook, setPDFBook] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const apiData = await fetchData();
        //console.log("API Response:", apiData);
        setData(apiData);
        const uniData = data
          ? Object.values(data.data).filter(
              (item) => item.bookType === "UNICODE"
            )
          : [];
        setUniBook(uniData);
        //console.log(uniData);
        const pdfData = data
          ? Object.values(data.data).filter((item) => item.bookType === "PDF")
          : [];
        setPDFBook(pdfData);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchDataFromApi();
  }, []);

  
  return (
    // Render your component with the fetched data
    <View style={{ flex: 1, marginTop: 20 }}>
      <View style={styles.navbar}>
        <Text style={{ fontSize: 20, fontWeight: "900" }}>Featured</Text>
      </View>
      <View style={styles.searchbararea}>
        <TextInput
          numberOfLines={1}
          maxLength={40}
          style={styles.searchbar}
          placeholder="Search"
        />
      </View>
      <View style={styles.bookSection}>
        <FlatList
          horizontal
          //data={data ? Object.values(data.data) : []}
          data={data ? Object.values(pdfBook) : []}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item}>
              <Image
                style={styles.imageSection}
                source={{ uri: "http://139.59.177.72/" + item.coverPhotoUri }}
              />
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
      <View style={styles.bookSection2}>
        <View style={styles.navbar2}>
          <Text style={{ fontSize: 20, fontWeight:"900" }}>Searchable Books</Text>
        </View>
        <FlatList
          horizontal
          //data={data ? Object.values(data.data) : []}
          data={data ? Object.values(uniBook) : []}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => handleBookPress(item)}>
              <Image
                style={styles.imageSection}
                source={{ uri: "http://139.59.177.72/" + item.coverPhotoUri }}
              />
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity><Text style={styles.featuredText}>Home</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.featuredText}>Audio Books</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.featuredText}>Settings</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.featuredText}>Search</Text></TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
  searchbararea: {
    flex: 0.1,
  },
  searchbar: {
    padding: 10,
    fontSize: 20,
    width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 50,
    color: "black",
  },
  navbar2: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
  },
  bookSection2: {
    flex: 0.35,
    width: "100%",
  },
  bookSection: {
    flex: 0.35,
    width: "100%",
  },
  item: {
    flexDirection: "column",
    width: 100,
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  itemText: {
    fontSize: 20,
  },
  imageSection: {
    width: 100,
    height: 150,
    overflow: "hidden",
  },
  footer: {
    flex: 0.1,
    backgroundColor: "darkblue",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  featuredText: {
    padding: 20,
    fontSize: 15,
    color: "white",
  }
});

export default ApiComponent;
