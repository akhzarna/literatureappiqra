import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ApiComponent from "./component/ApiComponent";
import Books from './component/Books';
import ChapterListScreen from './component/ChapterList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
<>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Books">
      <Stack.Screen name="Books" component={Books} />
      <Stack.Screen name="ChapterListScreen" component={ChapterListScreen} />
    </Stack.Navigator>
  </NavigationContainer>

		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			{/* <ApiComponent /> */}
      <Books />
			<StatusBar style="auto" />
		</View>
</>
    
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical :50
  },
});
