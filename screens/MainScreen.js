import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import ApiComponent from "../component/ApiComponent";
import BookItem from "../component/BookItem";

const MainScreen = ({ navigation }) => {
    const [searchable, nonSearchable] = ApiComponent();
    return (

      <View style={styles.mainContainer}>
        <TextInput
        style={styles.searchInput}
        placeholder="Search books..."
      />
      <View style = {styles.dataConatiner}>
       
        <View style = {styles.secondConatiner}>
          <Text style = {styles.title}>Searchable Books</Text>
          <FlatList
            data={searchable}
            keyExtractor={(item) => item._id}
            horizontal
            contentContainerStyle={{ paddingHorizontal: 10 }}
            ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Detail", { book: item })}
              >
                <BookItem book={item} />
              </TouchableOpacity>
            )}
          />
        </View>
        <View></View>
        <View style = {styles.firstConatiner}>
        <Text style = {styles.title}>Other Books</Text>

          <FlatList
            data={nonSearchable}
            keyExtractor={(item) => item._id}
            numColumns={2}
            contentContainerStyle={{ paddingHorizontal: 5 }}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            renderItem={({ item }) => 
            <View style = {styles.rowStyle}>
            <BookItem book={item} />
            </View>
          }
          />
        </View>
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
      height: '55%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    secondConatiner:{
      height: '35%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    searchInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 16,
      }, 
      dataConatiner:{
        flexDirection: 'column',
      }, 
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    

  });
  

export default MainScreen