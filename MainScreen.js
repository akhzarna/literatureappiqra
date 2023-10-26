// YourComponent.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './Components/Header';
import Search from './Components/Search';
import Footer from './Components/Footer';


const MainScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Define a function to fetch the data
    const fetchData = async () => {
      try {
        const response = await fetch('http://139.59.177.72/api/books?page=1');
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

 
    fetchData();
  }, []);

  const handleBookPress = (bookData) => {
    navigation.navigate('BookDetail', { bookData });
  };

  return (
    <View>
      
      <Header/>
      <Search/>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleBookPress(item)}>
            <View>
            <Image
            source={{ uri: `http://139.59.177.72/${item.coverPhotoUri}` }}
            style={{ width: 100, height: 150 }}
          />
 
              <Text>Title: {item.title}</Text>
              <Text>Author: {item.author.name}</Text>
              <Text>Category: {item.category.name}</Text>
              <Text>Description: {item.description}</Text>
           
            </View>
          </TouchableOpacity>
        )}
      />
   <Footer/>
    </View>
  );
};

export default MainScreen;
