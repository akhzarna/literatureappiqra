import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.icon}>Home</Text>
      <Text style={styles.icon}>Audio Book</Text>
      <Text style={styles.icon}>Setting</Text>
      <Text style={styles.icon}>Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,width:"100%"
  },
  icon: {
    color: 'white',
    fontSize: 16,
    padding:10
  },
});
