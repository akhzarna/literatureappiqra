import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./component/MainScreen";
import ChapterListScreen from "./component/ChapterListScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="ChapterList" component={ChapterListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
