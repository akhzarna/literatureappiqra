import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ApiComponent from "./component/ApiComponent";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';

const Stack = createStackNavigator();
export default function App() {
  
  return (
    <>
    <ApiComponent/>
    <NavigationContainer>
      <Stack.Navigator>


      <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />



      {/* <Stack.Screen
          name="Book"
          component={Product}
          options={{
            headerShown: false
          }}
        /> */}


      

      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
