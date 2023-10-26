import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import ChapterItem from "../component/ChapterItem";

const BookDetailsScreen = ({ route }) => {
  const { book } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "http://139.59.177.72/" + book.coverPhotoUri }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Title: {book.title}</Text>
        <Text style={styles.author}>Author: {book.author.name}</Text>
        <Text style={styles.genre}>Genre: {book.category.name}</Text>
        <Text style={styles.bookType}>Book Type: {book.bookType}</Text>
        <Text style={styles.chaptersHeading}>Chapters:</Text>
        <FlatList
          data={book.chapters}
          keyExtractor={(chapter, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ChapterItem key={index} title={item} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  detailsContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  author: {
    fontSize: 16,
    marginBottom: 8,
  },
  genre: {
    fontSize: 16,
    marginBottom: 8,
  },
  bookType: {
    fontSize: 16,
    marginBottom: 8,
  },
  chaptersHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
  },
  chaptersContainer: {
    marginTop: 8,
  },
});

export default BookDetailsScreen;
