import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-paper";
const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navText}>Featured</Text>
      <Button
        icon="message"
        labelStyle={{ fontSize: 32, color: "#216567" }}
        style={styles.icon}
      ></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  navbar: {
    height: 80,
    backgroundColor: "#fff",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  navText: {
    fontSize: 32,
    color: "#216567",
    fontWeight: "bold",
  },
  icon: {
    position: "absolute",
    right: 0,
    padding: 10,
  },
});

export default Navbar;
