import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome, FontAwesome5, Feather, Ionicons } from '@expo/vector-icons';

const Footer = () => {
  // Define the name of the selected icon
  const selectedIcon = 'star'; // Change this to the desired icon name

  return (
    <View style={styles.footer}>
      <View style={selectedIcon === 'star' ? styles.selectedIcon : styles.icon}>
        <FontAwesome name="star" size={24} color="black" />
      </View>
      <View style={selectedIcon === 'fire' ? styles.selectedIcon : styles.icon}>
        <FontAwesome5 name="fire" size={24} color="white" />
      </View>
      <View style={selectedIcon === 'activity' ? styles.selectedIcon : styles.icon}>
        <Feather name="activity" size={24} color="white" />
      </View>
      <View style={selectedIcon === 'ios-water' ? styles.selectedIcon : styles.icon}>
        <Ionicons name="ios-water" size={24} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    height: 50,
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
  },
});

export default Footer;
