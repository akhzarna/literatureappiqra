import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import the search icon from @expo/vector-icons

const Search= () => {
  return (
    <View style={styles.searchBar}>
      <AntDesign name="search1" size={24} color="gray" style={styles.searchIcon} />
      <TextInput
        style={styles.input}
        placeholder="Search"
   
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default Search;
