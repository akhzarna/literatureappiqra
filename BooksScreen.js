import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import axios from "axios";

const BooksScreen = ({ navigation }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://139.59.177.72/api/books?page=1"
        );
        setBooks(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#FFFFFF" }}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}
      >
        <TextInput
          placeholder="Search"
          style={{
            flex: 1,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
          }}
        />
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ fontSize: 20, marginBottom: 16 }}>Featured</Text>

      <FlatList
        data={books}
        keyExtractor={(item) => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Chapters", { chapters: item.chapters })
            }
            style={{ marginRight: 10 }}
          >
            <Image
              source={{ uri: item.coverPhotoUri }}
              style={{ width: 100, height: 150, borderRadius: 10 }}
            />
            <Text style={{ textAlign: "center", marginTop: 8 }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />

      <Text style={{ fontSize: 20, marginVertical: 16 }}>Searchable Book</Text>

      <FlatList
        data={books}
        keyExtractor={(item) => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Chapters", { chapters: item.chapters })
            }
            style={{ marginRight: 10 }}
          >
            <Image
              source={{ uri: item.coverPhotoUri }}
              style={{ width: 100, height: 120, borderRadius: 5 }}
            />
            <Text style={{ textAlign: "center", marginTop: 8 }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 15,
        }}
      >
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Audio Books</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BooksScreen;
