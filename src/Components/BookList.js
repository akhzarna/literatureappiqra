import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

export default function BookList({ data, searchable = false }) {
  const baseUrl = "http://139.59.177.72/";
  const navigate= useNavigation();
  const renderBook = ({ item }) => {
    return searchable ? (
      <TouchableOpacity style={{justifyContent:"center",alignItems:"center",gap:20}} onPress={()=>navigate.navigate("Book",{data:item})}>
        <View>
          <Image source={{ uri: baseUrl + item.coverPhotoUri }} style={{width:150,height:200,borderRadius:10}}/>
        </View>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    ) : (
      <View style={{justifyContent:"center",alignItems:"center",gap:20}}>
        <View>
          <Image source={{ uri: baseUrl + item.coverPhotoUri }} style={{width:150,height:200,borderRadius:10}}/>
        </View>
        <Text>{item.title}</Text>
      </View>
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={renderBook}
      contentContainerStyle={{ paddingHorizontal: 10,gap:10 }}
      keyExtractor={(item) => item._id}
      horizontal={true}
    />
  );
}
