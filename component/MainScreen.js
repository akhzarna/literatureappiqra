import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import axios from "axios";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ChapterListScreen from "./ChapterListScreen";
import BookCard from "./BookCard";

const BASE_URL = "http://139.59.177.72";
const Stack = createStackNavigator();

const MainScreen = ({ navigation }) => {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const apiUrl = `${BASE_URL}/api/books?page=1`;

    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data.data;

        if (Array.isArray(data)) {
          setBooks(data);
        } else {
          console.error("API Response is not an array:", data);
        }
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  });

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Featured</Text>
        </View>
        <TextInput
          style={styles.searchBar}
          placeholder="Search Books"
          onChangeText={(text) => setSearchText(text)}
        />
        <View style={styles.bookRow}>
          {filteredBooks.map((book) => (
            <TouchableOpacity
              key={book._id}
              onPress={() =>
                navigation.navigate("ChapterList", {
                  chapters: book.chapters,
                })
              }
            >
              <BookCard book={book} />
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.heading}>Searchable Books</Text>
        <View style={styles.bookRow}>
          {/* Render more book cards here */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  headerText: {
    fontSize: 20,
  },
  messageIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  bookRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  heading: {
    fontSize: 18,
    marginTop: 20,
    marginLeft: 10,
  },
});

export default MainScreen;