import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import BookDetailsScreen from "./screens/BookDetailsScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Featured"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Featured" component={HomeScreen} />
      <Stack.Screen name="BookDetails" component={BookDetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Audio Book") {
              iconName = "book";
            } else if (route.name === "Settings") {
              iconName = "settings";
            } else if (route.name === "Search") {
              iconName = "search";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={MainStack} />
        <Tab.Screen name="Audio Book" component={MainStack} />
        <Tab.Screen name="Settings" component={MainStack} />
        <Tab.Screen name="Search" component={MainStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
