import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import PublicImages from "../Constants/Image";
import BookList from "../Components/BookList";
import Request from "../Services/Request";
export default function Home() {
  const [searchable, setSearchable] = useState([]);
  const [pdf, setpdf] = useState([]);
  
  const data = Request();

  const filterBook = (bookData) => {
    const searchableData = bookData.filter(
      (item) => item.bookType === "UNICODE"
    );
    const pdfData = bookData.filter((item) => item.bookType === "PDF");
    setSearchable(searchableData);
    setpdf(pdfData);
  };
  const searchhandler = (text) => {
    console.log(text);
  };

  useEffect(() => {
    filterBook(data);
  }, [data]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heading}>
          <Text
            style={{
              flex: 1,
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 24,
            }}
          >
            Featured
          </Text>
          <View style={{ position: "absolute", right: 10 }}>
            <Image
              source={PublicImages.Message}
              style={{ tintColor: "navy" }}
            />
          </View>
        </View>
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search" style={styles.search} onChangeText={searchhandler} />
        </View>
      </View>

      <View style={styles.main}>
        <BookList data={pdf} />
        <View style={{ borderTopColor: "#F5F5F5", borderTopWidth: 15 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "navy",
                paddingVertical: 10,
              }}
            >
              Searchable Book
            </Text>
            <Text style={{ fontSize: 18, color: "green" }}>More +</Text>
          </View>
          <BookList data={searchable} searchable={true} />
        </View>
      </View>
      <View style={styles.footer}>
        <View>
          <Image source={PublicImages.Message} style={{ tintColor: "navy" }} />
          <Text>Home</Text>
        </View>
        <View>
          <Image source={PublicImages.Message} style={{ tintColor: "navy" }} />
          <Text>Home</Text>
        </View>
        <View>
          <Image source={PublicImages.Message} style={{ tintColor: "navy" }} />
          <Text>Home</Text>
        </View>
        <View>
          <Image source={PublicImages.Message} style={{ tintColor: "navy" }} />
          <Text>Home</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 0.2,
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 10,
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  searchContainer: {
    width: "100%",
    backgroundColor: "#F5F5F5",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  search: {
    width: "100%",
    paddingVertical: 20,
    backgroundColor: "#fff",
    borderColor: "black",
    borderWidth: 1,
    fontSize:18,
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  main: {
    flex: 0.7,
  },
  footer: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
