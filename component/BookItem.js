import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const BookItem = ({ book }) => {
  return (
    <View style = {styles.main}>
      <Image source={{ uri: 'http://139.59.177.72/' + book.coverPhotoUri }} style={styles.image} />
      <View style = {styles.data}>
      <Text>Title: {book.title}</Text>
      <Text>Author: {book.author.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    main:{
        flex:1,
    },
    image:{
        height: 90,
        width: 90,
    },
    data:{
justifyContent: 'center',
alignItems: 'start',
    }
});

export default BookItem;
