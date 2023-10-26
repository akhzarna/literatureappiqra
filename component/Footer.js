import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
function Footer() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: "100%",
        height: 80,
        backgroundColor: "black",
        padding: 10,
        display: "felx",
        justifyContent: "space-between",
        algignItems: "center",
        flexDirection: "row",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Books")}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          Books
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          color: "white",
          fontSize: 20,
        }}
      >
        Dummy
      </Text>
    </View>
  );
}

export default Footer;
