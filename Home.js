import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getApiData } from "./component/ApiComponent";
import { useNavigation } from "@react-navigation/native";

function Home() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    getApiData().then((result) => {
      setBooks(result.data);
    });
  }, []);

  const navigateToBook = (chapters) => {
    navigation.navigate("Chapters", { chapters });
  };

  return (
    <View style={{ padding: 10 }}>
      {/* Search bar Code */}
      <View
        style={{
          padding: 10,
        }}
      >
        <TextInput
          style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderWidth: 0.5,
            borderRadius: 15,
            padding: 10,
            borderColor: "black",
            color: "black",
            backgroundColor: "white",
          }}
          placeholder="Search"
          onChangeText={(text) => {
            setSearch(text);
          }}
          value={search}
        />
      </View>

      {/* Display just PDfs */}

      <FlatList
        data={books}
        horizontal
        contentContainerStyle={{
          gap: 12,
        }}
        renderItem={({ item, index }) => {
          if (item.bookType === "PDF") {
            return (
              <View key={index} style={{ width: 150 }}>
                <Image
                  width={150}
                  height={250}
                  source={{
                    uri: `http://139.59.177.72/${item.coverPhotoUri}`,
                  }}
                />

                <Text>{item.title}</Text>
              </View>
            );
          }
        }}
      />

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Searchable Books
        </Text>
        <Text style={{ fontSize: 14, color: "#82d792" }}>More</Text>
      </View>

      <FlatList
        data={books}
        horizontal
        contentContainerStyle={{
          gap: 12,
        }}
        renderItem={({ item, index }) => {
          if (item.bookType === "UNICODE") {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigateToBook(item.chapters);
                }}
                key={index}
                style={{ width: 150 }}
              >
                <Image
                  width={150}
                  height={250}
                  source={{
                    uri: `http://139.59.177.72/${item.coverPhotoUri}`,
                  }}
                />

                <Text>{item.title}</Text>
              </TouchableOpacity>
            );
          }
        }}
      />
    </View>
  );
}

export default Home;
