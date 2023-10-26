import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ApiComponent from "./component/ApiComponent";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screen/Home';
import ChapterList from './Screen/ChapterList';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
	  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Featured" component={Home} />
        <Stack.Screen name="ChapterList" component={ChapterList} />
      </Stack.Navigator>
    </NavigationContainer>
	);
}


