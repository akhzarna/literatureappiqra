import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChapterItem = ({ title }) => {
  return (
    <View style={styles.chapterContainer}>
      <Text style={styles.chapterTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chapterContainer: {
    borderBottomWidth: 1,
    borderColor: "white",
    borderRadius: 30,
    backgroundColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
  chapterTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ChapterItem;
