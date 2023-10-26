import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const BookCard = ({ book }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: `http://139.59.177.72/${book.coverPhotoUri}` }}
        style={styles.thumbnail}
      />
      <Text style={styles.bookName}>{book.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 100,
    margin: 10,
  },
  thumbnail: {
    width: 100,
    height: 150,
  },
  bookName: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default BookCard;
