import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import fetchData from "../hooks/StorageHook";

const API_URL = "http://139.59.177.72/api/books?page=";

const FlatListComponent = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const navigation = useNavigation();

  const loadBooksData = (page) => {
    fetchData(API_URL + page)
      .then((responseData) => {
        setData([...data, ...responseData.data]);
        setCurrentPage(page + 1);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    loadBooksData(1);
  }, []);

  const handleSearchableBookPress = (bookId) => {
    navigation.navigate("Chapter", { bookId });
  };

  const renderBookItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => handleSearchableBookPress(item._id)}
    >
      <Image
        style={styles.coverImage}
        source={{ uri: "http://139.59.177.72/" + item.coverPhotoUri }}
      />
      <View style={styles.bookDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemAuthor}>Author: {item.author.name}</Text>
        {/* Other book details */}
      </View>
    </TouchableOpacity>
  );

  const renderBookSection = (title, books) => (
    <View style={styles.booksSection}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item._id}
        renderItem={renderBookItem}
        numColumns={3}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Featured</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
      {renderBookSection("PDF Books", data.filter((item) => item.bookType === "PDF"))}
      {renderBookSection("Searchable Books", data.filter((item) => item.chapters.length > 0))}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Text style={styles.footerText}>Audio Books</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Text style={styles.footerText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Text style={styles.footerText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    color: "black",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  booksSection: {
    marginBottom: 20,
  },
  listItem: {
    flex: 1,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  coverImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 5,
  },
  // ... (rest of the styles)
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
  footerText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default FlatListComponent;
