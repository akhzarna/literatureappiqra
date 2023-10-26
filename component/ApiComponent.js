import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ApiComponent = () => {
  const [apiResponse, setApiResponse] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const getApiData = async () => {
      const apiUrl = "http://139.59.177.72/api/books?page=1";
      try {
        const response = await axios.get(apiUrl);
        setApiResponse(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getApiData();
  }, []);

  const handleBooksChapter = (item) => {
    console.log(item.chapters);
    navigation.navigate("Chapters", { chapters: item.chapters });
  };

  const filteredBooks = apiResponse.filter((book) =>
    book.category.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  const handleSearch = (text) => {
    setSearchInput(text);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Text style={styles.navbarText}>Featured</Text>
        </View>

        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor="gray"
            onChangeText={handleSearch}
          />
        </View>

        <View style={styles.flatListContainer}>
          <Text style={styles.sectionHeader}>Featured Books</Text>
          <FlatList
            data={filteredBooks}
            horizontal={true}
            renderItem={({ item }) => (
              <View style={styles.flatListItem}>
                <Image
                  source={{ uri: `http://139.59.177.72/${item.coverPhotoUri}` }}
                  style={styles.flatListImage}
                />
                <Text style={styles.flatListText}>{item.category.name}</Text>
              </View>
            )}
            keyExtractor={(item) => item._id}
          />
        </View>

        <View style={styles.flatListContainer}>
          <Text style={styles.sectionHeader}>Searchable Books</Text>
          <FlatList
            data={apiResponse}
            horizontal={true}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleBooksChapter(item)}>
                <View style={styles.flatListItem}>
                  <Image
                    source={{
                      uri: `http://139.59.177.72/${item.coverPhotoUri}`,
                    }}
                    style={styles.flatListImage}
                  />
                  <Text style={styles.flatListText}>{item.category.name}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item._id}
          />
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>AudioBooks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  navbar: {
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    marginTop: 40,
  },
  navbarText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    margin: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    shadowColor: "rgba(1, 1, 1, 0.2)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 2,
    borderColor: "gray",
  },
  input: {
    flex: 1,
    height: 40,
  },
  flatListContainer: {
    flex: 0.4,
    marginTop: 20,
  },
  sectionHeader: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 20,
  },
  flatListItem: {
    height: 200,
    flexDirection: "column",
    marginHorizontal: 20,
    alignItems: "center",
    marginTop: 20,
  },
  flatListImage: {
    width: 150,
    height: 150,
  },
  flatListText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "blue", // Footer background color
    height: 60, // Adjust the height as needed
  },
  link: {
    flex: 1,
    alignItems: "center",
  },
  linkText: {
    color: "white", // Link text color
    fontWeight: "bold",
  },
});

export default ApiComponent;
