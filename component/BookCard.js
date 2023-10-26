import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const BookCard = ({ book, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(book)}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{ uri: `http://139.59.177.72/${book.coverPhotoUri}` }}
        />
        <Text style={styles.title}>{book.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    padding: 10,
    marginBottom: 10,
    width: "100%", 
  },
  image: {
    width: "100%", 
    height: 200,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default BookCard;
