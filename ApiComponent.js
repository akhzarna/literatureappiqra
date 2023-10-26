import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";

const ApiComponent = ({ navigation }) => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://139.59.177.72/api/books?page=1")
      .then((response) => setBooks(response.data.data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const splitIntoRows = (data) => {
    const rows = [];
    for (let i = 0; i < data.length; i += 3) {
      rows.push(data.slice(i, i + 3));
    }
    return rows;
  };

  const filterBooksByType = (type) =>
    books.filter((book) => book.bookType === type);

  const handleUnicodeBookPress = (item) =>
    navigation.navigate("ChapterScreen", { chapters: item.chapters || [] });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Featured Books</Text>
        <MaterialIcons
          name="message"
          size={24}
          color="blue"
          style={styles.messageIcon}
        />
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for books..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <MaterialIcons
          name="search"
          size={24}
          color="#999"
          style={styles.searchIcon}
        />
      </View>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>PDF Books</Text>
          {splitIntoRows(filterBooksByType("PDF")).map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((item) => (
                <View key={item._id} style={styles.item}>
                  <Image
                    source={{
                      uri: `http://139.59.177.72/${item.coverPhotoUri}`,
                    }}
                    style={styles.coverPhoto}
                    resizeMode="cover"
                  />
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemAuthor}>
                    Author: {item.author.name}
                  </Text>
                  <Text style={styles.itemDescription}>{item.description}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Unicode Books</Text>
          {splitIntoRows(filterBooksByType("UNICODE")).map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((item) => (
                <TouchableOpacity
                  key={item._id}
                  style={styles.item}
                  onPress={() => handleUnicodeBookPress(item)}
                >
                  <Image
                    source={{
                      uri: `http://139.59.177.72/${item.coverPhotoUri}`,
                    }}
                    style={styles.coverPhoto}
                    resizeMode="cover"
                  />
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemAuthor}>
                    Author: {item.author.name}
                  </Text>
                  <Text style={styles.itemDescription}>{item.description}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <View style={styles.footerIcon}>
            <MaterialIcons name="home" size={24} color="blue" />
          </View>
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <View style={styles.footerIcon}>
            <MaterialIcons name="library-books" size={24} color="blue" />
          </View>
          <Text style={styles.footerText}>Audio Books</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <View style={styles.footerIcon}>
            <MaterialIcons name="settings" size={24} color="blue" />
          </View>
          <Text style={styles.footerText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <View style={styles.footerIcon}>
            <MaterialIcons name="search" size={24} color="blue" />
          </View>
          <Text style={styles.footerText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  messageIcon: {
    marginLeft: "auto",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: "#333",
    paddingLeft: 40,
  },
  searchIcon: {
    position: "absolute",
    left: 10,
    zIndex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  item: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginLeft: 10,
    marginRight: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  itemAuthor: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#666",
  },
  itemDescription: {
    fontSize: 14,
    color: "#999",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: "100%",
  },
  footerItem: {
    alignItems: "center",
  },
  footerIcon: {
    padding: 12,
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "blue",
  },
  coverPhoto: {
    width: "100%",
    height: 150,
    marginBottom: 10,
    borderRadius: 8,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
    marginBottom: 10,
  },
});

export default ApiComponent;