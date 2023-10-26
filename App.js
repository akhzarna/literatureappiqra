import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Screens/Home';
import BooksChapters from './Screens/BooksChapters';

export default function App() {
  const Stack = createStackNavigator();
  
  return (
		<NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name='Home'
          component={Home}
          options={{headerShown:false}}
        />

        <Stack.Screen
          name='BookChapters'
          component={BooksChapters}

        />

      </Stack.Navigator>
          
      
    </NavigationContainer>
	);
}

