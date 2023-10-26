import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChapterItem = ({ title }) => {
  return (
    <View style={styles.chapterContainer}>
      <Text style={styles.chapterTitle}>Chapter : {title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chapterContainer: {
    borderBottomWidth: 1,
    borderColor: "gray",
    borderRadius: 30,
    backgroundColor: "#e3c0c0",
    padding: 10,
    marginBottom: 10,
  },
  chapterTitle: {
    fontSize: 20,
  },
});

export default ChapterItem;
