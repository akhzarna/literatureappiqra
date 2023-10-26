import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function BooksList({ books, bookType }) {
    const navigation = useNavigation();
  const baseUrl = "http://139.59.177.72/";
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          margin: 10,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {bookType}
      </Text>
      <FlatList
        horizontal
        contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 20 }}
        data={books.data}
        renderItem={({ item }) => (
            <>
          {item.bookType === bookType && <View
            style={{
              width: 180,
              margin: 10,
            }}
          >
            {bookType === "UNICODE" ? (
              <TouchableOpacity onPress={()=>{
                navigation.navigate("BookDetails", {chapters : item.chapters , title : item.title})
              }}>
                <Image
                  source={{ uri: baseUrl + item.coverPhotoUri }}
                  style={{
                    width: "100%",
                    height: 200,
                    borderRadius: 5,
                  }}
                />
              </TouchableOpacity>
            ) : (
              <Image
                source={{ uri: baseUrl + item.coverPhotoUri }}
                style={{
                  width: "100%",
                  height: 200,
                  borderRadius: 5,
                }}
              />
            )}

            <Text
              style={{
                fontSize: 20,
              }}
            >
              {item.title}
            </Text>
          </View>}
          </>
        )}
      />
    </View>
  );
}

export default BooksList;
