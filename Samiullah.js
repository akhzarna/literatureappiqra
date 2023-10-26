import React, { useEffect } from "react";
import { useState } from "react";
import { View, SectionList, Text, StyleSheet, ActivityIndicator, Image } from "react-native";
import ApiComponent from "./component/ApiComponent";

const Samiullah = () => {
  const { data, loadData } = ApiComponent();
  const apiUrl = "http://139.59.177.72/api/books?page=1";

  const [Unicode, setUnicode] = useState([]);
  const [PDF, setPDF] = useState([]);

  useEffect(() => {
    loadData(apiUrl);
  }, []);

  useEffect(() => {
    // Ensure data is available and then filter books into Unicode and PDF
    if (data) {
      const unicodeBooks = data.filter((book) => book.bookType === "UNICODE");
      const pdfBooks = data.filter((book) => book.bookType === "PDF");

      setUnicode(unicodeBooks);
      setPDF(pdfBooks);
    }
  }, [data]);

  // Define a function to group the data by author's name (You can keep your groupDataByAuthor function)

  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      <SectionList
        sections={Unicode} // Display Unicode books
        keyExtractor={(item) => item._id}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{section.title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={{ fontWeight: "bold" }}>Title: {item.title}</Text>
            <Text>Description: {item.description}</Text>
            <Image
              style={{
                width: 150,
                height: 200,
                borderRadius: 10,
                overflow: "hidden",
                borderWidth: 3,
                marginLeft: 10,
              }}
              source={{ uri: item.coverPhotoUri }}
            />
          </View>
        )}
      />
      <SectionList
        sections={PDF} // Display PDF books
        keyExtractor={(item) => item._id}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{section.title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={{ fontWeight: "bold" }}>Title: {item.title}</Text>
            <Text>Description: {item.description}</Text>
            <Image
              style={{
                width: 150,
                height: 200,
                borderRadius: 10,
                overflow: "hidden",
                borderWidth: 3,
                marginLeft: 10,
              }}
              source={{ uri: item.coverPhotoUri }}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: "lightgray",
    padding: 10,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  item: {
    padding: 10,
    backgroundColor: "lightgray",
    margin: 5,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Samiullah;
