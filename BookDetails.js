// ChapterListScreen.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const BookDetails = ({ route }) => {
  const { bookData } = route.params;

  return (
    <View>
      <Text>{bookData.title} - Chapters</Text>
      <FlatList
        data={bookData.chapters}
        keyExtractor={(item, index) => index.toString()} 
        renderItem={({ item }) => (
          <View>
            <Text>Chapter Title: {item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default BookDetails;
