import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./component/MainScreen";
import ChapterListScreen from "./component/ChapterListScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{ title: "Book List" }}
        />
        <Stack.Screen
          name="ChapterList"
          component={ChapterListScreen}
          options={{ title: "Chapters" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
