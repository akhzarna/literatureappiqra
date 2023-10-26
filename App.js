import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ApiComponent from "./component/useApi";
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './routes/Navigation';
import BooksScreen from './screens/BooksScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LoadingModal } from "react-native-loading-modal";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookDetails from './screens/BookDetails';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          {/* <Text>Hello World</Text> */}
          <Stack.Navigator>
            <Stack.Screen
              name="Books"
              component={BooksScreen}
            />
            <Stack.Screen
              name="BookDetails"
              component={BookDetails}
            />
          </Stack.Navigator>
          {/* <BooksScreen/> */}
          {/* <BookDetails/> */}
        </SafeAreaView>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
