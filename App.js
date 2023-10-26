import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, Pressable, Alert, SafeAreaView} from 'react-native';
import React, { useState } from 'react';
import Home from './component/Home';
import Chapters from './component/Chapters';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';







export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false }}  
        />

         <Stack.Screen 
        name="Chapters" 
        component={Chapters} 
        options={{ headerShown: true }}  
        />

        
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


