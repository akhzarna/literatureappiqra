import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ApiComponent from "./component/ApiComponent";
import ChapterScreen from "./component/ChapterScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ApiComponent} />
        <Stack.Screen name="ChapterScreen" component={ChapterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;