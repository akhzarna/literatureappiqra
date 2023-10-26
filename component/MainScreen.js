import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import axios from "axios";
import BookCard from "./BookCard";

const BASE_URL = "http://139.59.177.72";

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
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleBookPress = (book) => {
    navigation.navigate("ChapterList", { book });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Featured</Text>
        </View>
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search Books"
            onChangeText={(text) => setSearchText(text)}
          />
        </View>
        {filteredBooks.length === 0 ? (
          <Text style={styles.noBooksText}>No Books Found 😔</Text>
        ) : (
          <View style={styles.bookRow}>
            {filteredBooks.map((book) => (
              <TouchableOpacity
                key={book._id}
                onPress={() => handleBookPress(book)}
                style={styles.bookCardContainer}
              >
                <BookCard book={book} onPress={handleBookPress} />
              </TouchableOpacity>
            ))}
          </View>
        )}
        <Text style={styles.heading}>Searchable Books</Text>
        {filteredBooks.length === 0 ? null : (
          <View style={styles.bookRow}>
            {filteredBooks.map((book) => (
              <TouchableOpacity
                key={book._id}
                onPress={() => handleBookPress(book)}
                style={styles.bookCardContainer}
              >
                <BookCard book={book} onPress={handleBookPress} />
              </TouchableOpacity>
            ))}
          </View>
        )}
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
    fontWeight: "bold",
  },
  searchBarContainer: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  bookRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  bookCardContainer: {
    width: "48%",
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    marginTop: 20,
    marginLeft: 10,
    fontWeight: "bold",
  },
  noBooksText: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
  },
});

export default MainScreen;
