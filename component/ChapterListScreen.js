
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ChapterListScreen = ({ route }) => {
  const { chapters } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Chapter List</Text>
      <ScrollView style={styles.scrollView}>
        {chapters.map((chapter, index) => (
          <Text key={index} style={styles.chapterItem}>
            {chapter}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1, // Take up all available space
  },
  chapterItem: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default ChapterListScreen;
