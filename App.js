import React from "react";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ApiComponent from "./component/ApiComponent";
import ChapterList from "./ChapterList";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ApiComponent">
        <Stack.Screen
          name="ApiComponent"
          component={ApiComponent}
          options={{
            title: "Featured",
            headerTitleAlign: "center", // Center-align the title
          }}
        />
        <Stack.Screen
          name="ChapterList"
          component={ChapterList}
          options={{
            title: "Chapter List",
            headerTitleAlign: "center", // Center-align the title
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
