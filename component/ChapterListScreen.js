import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ChapterListScreen = ({ route }) => {
  const { book } = route.params;

  return (
    <View>
      <Text style={styles.heading}>Chapters for {book.title}</Text>
      {book.chapters.length === 0 ? (
        <Text style={styles.noChaptersText}>No Chapters for this book 😕</Text>
      ) : (
        <FlatList
          data={book.chapters}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.chapterContainer}>
              <Text style={styles.chapterNumber}>Chapter {index + 1}</Text>
              <Text style={styles.chapterTitle}>Title: {item}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  chapterContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  chapterNumber: {
    fontSize: 16,
    fontWeight: "bold",
  },
  chapterTitle: {
    fontSize: 14,
  },
  noChaptersText: {
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",
  },
});

export default ChapterListScreen;
