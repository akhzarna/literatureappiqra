import React from "react";
import { Text, View } from "react-native";

const ChapterListScreen = ({ navigation }) => {
  const chapters = navigation.getParam("chapters", []);

  return (
    <View>
      {chapters.map((chapter, index) => (
        <Text key={index}>{chapter}</Text>
      ))}
    </View>
  );   
};

export default ChapterListScreen;
