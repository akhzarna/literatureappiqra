import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [searchableBooks, setSearchableBooks] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://139.59.177.72/api/books?page=1';

    axios.get(apiUrl)
      .then(response => {
        const bookData = response.data.data;
        // Filter the searchable books
        const searchableBooks = bookData.filter(book => book.bookType === 'SEARCHABLE');
        setSearchableBooks(searchableBooks);
      })
      .catch(error => {
        console.error('Error fetching book data: ', error);
      });
  }, []);

  return (
    <View>
      <Text>Searchable Books:</Text>
      <FlatList
        data={searchableBooks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('BookDetails', { bookId: item._id })}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const BookDetailsScreen = ({ route }) => {
  const { bookId } = route.params;
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    const apiUrl = `http://139.59.177.72/api/books/${bookId}`;

    axios.get(apiUrl)
      .then(response => {
        const bookData = response.data;
        setBookDetails(bookData);
      })
      .catch(error => {
        console.error('Error fetching book details: ', error);
      });
  }, [bookId]);

  return (
    <View>
      {bookDetails ? (
        <View>
          <Text>Title: {bookDetails.title}</Text>
          <Text>Description: {bookDetails.description}</Text>
          <Text>Author: {bookDetails.author.name}</Text>
          <Text>Category: {bookDetails.category.name}</Text>
          {/* You can display other book details here */}
        </View>
      ) : (
        <Text>Loading book details...</Text>
      )}
    </View>
  );
};

const AppNavigator = createAppContainer(
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="BookDetails" component={BookDetailsScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
