import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ApiComponent from "./component/ApiComponent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Chapters from "./Chapters";
import { NavigationContainer } from "@react-navigation/native";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const BottomNav = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomNav"
          component={BottomNav}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Chapters"
          component={Chapters}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
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
