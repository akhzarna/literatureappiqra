import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ApiComponent from "./component/ApiComponent";
import ChapterListScreen from "./ChapterListScreen";

const AppNavigator = createStackNavigator({
  Home: { screen: ApiComponent },
  ChapterList: { screen: ChapterListScreen },
});

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the Book App</Text>
      <AppContainer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

