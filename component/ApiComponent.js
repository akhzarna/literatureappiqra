import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const ApiComponent = () => {
  const [data, setData] = useState([]);
const navigation = useNavigation()
  useEffect(() => {
    // Define the API endpoint
    const apiUrl = "http://139.59.177.72/api/books?page=1"; // Example API
    // Make an API request
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("API Response:", response.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {
        navigation.navigate('ChapterList',{
          chapterList:item.chapters
        });
        // console.log(item.chapters);
    }}>
      <View style={styles.itemContainer}>
        <Image
          style={styles.image}
          source={{ uri: "http://139.59.177.72/" + item.coverPhotoUri }}
        />
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      horizontal={true}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    margin: 10,
    alignItems: "center",
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    width: 100,
    height: 150,
  },
});

export default ApiComponent;
