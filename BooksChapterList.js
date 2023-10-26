import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import axios from "axios";

const BASE_URL = "http://139.59.177.72";

const BooksChapterList = ({ route }) => {
  const { bookId } = route.params;
  const [chapters, setChapters] = useState([]);

  useEffect(() => {

    const apiUrl = `${BASE_URL}/api/books/${bookId}/chapters`;

    
    axios
      .get(apiUrl)
      .then((response) => {
      
        setChapters(response.data.data || []); 
      })
      .catch((error) => {
        console.error("API Request Error:", error);
      });
  }, [bookId]);

  return (
    <View>
      <Text style={styles.sectionTitle}>Chapter List</Text>
      {chapters && chapters.length > 0 ? (
        <ScrollView>
          {chapters.map((chapter) => (
            <View key={chapter} style={styles.chapterContainer}>
              <Text style={styles.chapterTitle}>{chapter}</Text>
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text>Chapters are not available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    color: "black",
  },
  chapterContainer: {
    borderBottomWidth: 1,
    borderColor: "gray",
    padding: 10,
  },
  chapterTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BooksChapterList;
