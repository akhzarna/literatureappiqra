import { StyleSheet, Text, View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import BooksScreen from '../screens/BooksScreen';

const Tab = createBottomTabNavigator();

import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
function BooksStack() {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Books"
        component={BooksScreen}
        options={{
          // headerShown: false, 
        }}
      />
    </Stack.Navigator>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="BooksStack" component={BooksStack} options={{
        tabBarIcon: () => {
          return <Icon name="book" size={30} color={styles.IconColor.color} />
        }
      }} />
      {/* <Tab.Screen name="AudioBooks" component={BooksScreen} options={{headerShown: false, tabBarIcon: () => {
        return <FeatherIcon name="headphones" size={30} color={styles.IconColor.color} />
      }}}/> */}
      {/* <Tab.Screen name="Books" component={BooksScreen} options={{headerShown: false, tabBarIcon: () => {
        return <Icon name="book" size={30} color={styles.IconColor.color} />
      }}}/> */}
      {/* <Tab.Screen name="Books" component={BooksScreen} options={{headerShown: false, tabBarIcon: () => {
        return <Icon name="book" size={30} color={styles.IconColor.color} />
      }}}/> */}
    </Tab.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}
export default Navigation
const styles = StyleSheet.create({
  IconColor: {
    color: "black"
  }
})