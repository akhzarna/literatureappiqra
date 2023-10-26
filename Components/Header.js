import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import the icon from @expo/vector-icons

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Featured</Text>
      <AntDesign name="star" size={24} color="grey" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    gap:800,
    backgroundColor: 'lightgray',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 'auto', // Pushes the title to the center
  },
});

export default Header;
