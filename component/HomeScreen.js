import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";
import BookItem from "./BookItem";

const HomeScreen = ({ navigation }) => {
  const [searchableBooks, setSearchableBooks] = useState([]);
  const [nonSearchableBooks, setNonSearchableBooks] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get("http://139.59.177.72/api/books?page=1")
      .then((response) => {
        const { data } = response.data;
        const searchable = data.filter((book) => book.bookType === "UNICODE");
        const nonSearchable = data.filter(
          (book) => book.bookType !== "UNICODE"
        );
        setSearchableBooks(searchable);
        setNonSearchableBooks(nonSearchable);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);

  const filteredSearchableBooks = searchableBooks.filter((book) =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search books..."
        value={searchText}
        onChangeText={handleSearchTextChange}
      />

      <View style={styles.columnContainer}>
        <View>
          <Text style={styles.headingText}>Searchable Books</Text>
          <FlatList
            data={filteredSearchableBooks}
            keyExtractor={(item) => item._id}
            horizontal
            contentContainerStyle={{ paddingHorizontal: 10 }}
            ItemSeparatorComponent={() => <View style={{ width: 30 }} />}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("BookDetails", { book: item })
                }
              >
                <BookItem book={item} />
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={{ paddingTop: 20 }}>
          <Text style={styles.headingText}>Non-Searchable Books</Text>
          <FlatList
            data={nonSearchableBooks}
            keyExtractor={(item) => item._id}
            numColumns={3}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            renderItem={({ item }) => <BookItem book={item} />}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  columnContainer: {
    flexDirection: "column",
  },
  searchInput: {
    height: 40,
    borderColor: "#ffd3d3",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 20,
  },
});

export default HomeScreen;
