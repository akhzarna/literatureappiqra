import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const BASE_URL = "http://139.59.177.72";

const ApiComponent = () => {
  const [books, setBooks] = useState([]);
  const pdfBooks = books.filter((item) => item.bookType === "PDF");
  const unicodeBooks = books.filter((item) => item.bookType === "UNICODE");
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    // Define the API URL
    const apiUrl = `${BASE_URL}/api/books?page=1`;

    // Make an HTTP GET request using axios
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the API response data
        setBooks(response.data.data);
      })
      .catch((error) => {
        console.error("API Request Error:", error);
      });
  }, []); // Empty dependency array ensures the effect runs only once

  const navigateToChapterList = (bookId) => {
    // Navigate to the ChapterList screen with the selected book ID
    navigation.navigate("ChapterList", { bookId });
  };

  return (
    <View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      <ScrollView horizontal={true}>
        <View style={styles.rowContainer}>
          {pdfBooks.map((item) => (
            <View key={item._id} style={styles.bookContainer}>
              <Image
                source={{ uri: `${BASE_URL}/${item.coverPhotoUri}` }}
                style={styles.bookImage}
              />
              <Text style={styles.bookTitle}>{item.title}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <Text style={styles.sectionTitle}>Searchable Books</Text>
      <ScrollView horizontal={true}>
        <View style={styles.rowContainer}>
          {unicodeBooks.map((item) => (
            <TouchableOpacity
              key={item._id}
              style={styles.bookContainer}
              onPress={() => navigateToChapterList(item._id)}
            >
              <Image
                source={{ uri: `${BASE_URL}/${item.coverPhotoUri}` }}
                style={styles.bookImage}
              />
              <Text style={styles.bookTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    margin: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    color: "blue",
  },
  rowContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    paddingBottom: 0,
  },
  bookContainer: {
    marginRight: 20,
  },
  bookImage: {
    width: 150,
    height: 250,
  },
  bookTitle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default ApiComponent;
