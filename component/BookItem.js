import React from "react";
import { View, Text, Image } from "react-native";

const BookItem = ({ book }) => {
  return (
    <View>
      <Image
        source={{ uri: "http://139.59.177.72/" + book.coverPhotoUri }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{book.title}</Text>
      <Text>{book.author.name}</Text>
    </View>
  );
};

export default BookItem;
