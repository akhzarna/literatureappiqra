import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

export default function Book() {
  const [data, setData] = useState([]);
  const navigate = useNavigation();
  const book = useRoute();
  const renderBook = ({ item, index }) => {
    return (
      <View style={{ alignItems: "flex-end" }}>
        <Text>
          {index}-{item}
        </Text>
      </View>
    );
  };
  useEffect(() => {
    setData(book.params.data);
    console.log(book.params.data);
  }, []);
  return (
    <View style={{ paddingHorizontal: 20 }}>
      {data && (
        <>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              paddingVertical: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigate.goBack();
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                {" "}
                {`<`} Back to Home
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Text
              style={{ fontWeight: "bold", fontSize: 18, textAlign: "center" }}
            >
              BookName:
            </Text>
            <Text>{data.title}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 18, textAlign: "center" }}
            >
              Author:
            </Text>
            <Text>{data.author?.name}</Text>
          </View>
          <Text
            style={{ fontWeight: "bold", fontSize: 18, textAlign: "center" }}
          >
            Chapters
          </Text>
          <FlatList
            data={data.chapters}
            renderItem={renderBook}
            keyExtractor={(item) => item._id}
            contentContainerStyle={{ paddingHorizontal: 10 }}
          />
        </>
      )}
    </View>
  );
}
