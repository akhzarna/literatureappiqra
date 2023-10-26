import React from "react";
import { View, FlatList, Text } from "react-native";

const ChaptersScreen = ({ navigation }) => {
  const chapters = navigation.getParam("chapters", []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={chapters}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

export default ChaptersScreen;
