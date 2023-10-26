import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ChapterScreen = ({ route, navigation }) => {
  const { chapters } = route.params;

  const renderChapterItem = ({ item }) => (
    <TouchableOpacity style={styles.chapterItemContainer} onPress={() => {}}>
      <View style={styles.chapterItem}>
        <Text style={styles.chapterText}>{item}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chapters</Text>
      <FlatList
        data={chapters}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderChapterItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  chapterItemContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginVertical: 8,
    padding: 16,
    elevation: 1,
  },
  chapterItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  chapterText: {
    fontSize: 18,
  },
});

export default ChapterScreen;