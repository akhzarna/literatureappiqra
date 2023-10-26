import React, { useEffect, useState }from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Home from "./Screens/Home";
import Book from "./Screens/Book";

export const CustomStatusBar = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        height: insets.top,
        backgroundColor: "#337CCF",
      }}
    />
  );
};
const Stack = createNativeStackNavigator();

const Router = () => {
  const [initialRouteName, setInitialRouteName] = useState("Home");

  return (
    <SafeAreaProvider>
      <CustomStatusBar />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={initialRouteName}
          screenOptions={{
            headerShown: false,
          }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Book" component={Book} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Router;
