import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BookDetails from "./component/BookDetails";
import ApiComponent from "./component/ApiComponent";
import Books from "./component/Books";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Home from "./component/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
export const CustomStatusBar = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        height: insets.top-10,
        backgroundColor: "gray",
      }}
    />
  );
};
const Stack = createNativeStackNavigator();
export default function App() {
  const books = ApiComponent();
  return (
    <SafeAreaProvider>
      <CustomStatusBar></CustomStatusBar>
      
      <NavigationContainer>
        <NavBar></NavBar>
        <Stack.Navigator
          initialRouteName={"Home"}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Books" component={Books} />
          <Stack.Screen name="BookDetails" component={BookDetails} />
          {/* <Stack.Screen name="Sample" component={Sample} /> */}
        
        </Stack.Navigator>
        <Footer></Footer>
      </NavigationContainer>
    </SafeAreaProvider>
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
