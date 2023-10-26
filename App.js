import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ApiComponent from "./component/ApiComponent";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chapters from './Chapters';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Featured"
          component={ApiComponent}
          options={{
            headerShown: true,
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Chapters"
          component={Chapters}
          options={{
            headerShown: true,
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
