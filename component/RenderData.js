import React from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import ApiComponent from "./ApiComponent";
import BookItem from "./BookItem";

const RenderData = ({ navigation }) => {
  const [searchable, nonSearchable] = ApiComponent();
  return (
    <View style={styles.mainContainer}>
      <View style = {styles.firstConatiner}>
        <Text>Non-Searchable Books</Text>
        <FlatList
          data={nonSearchable}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => 
          <View style = {styles.rowStyle}>
          <BookItem book={item} />
          </View>
        }
        />
      </View>
      <View style = {styles.secondConatiner}>
        <Text>Searchable Books</Text>
        <FlatList
          data={searchable}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("BookDetails", { book: item })}
            >
              <BookItem book={item} />
            </TouchableOpacity>
          )}
        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  firstConatiner:{
    height: '50%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondConatiner:{
    height: '50%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowStyle: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  }
});

export default RenderData;
