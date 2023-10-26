import { StyleSheet, Text, View, StatusBar } from "react-native";
import ApiComponent from "./component/ApiComponent";
import MyStack from "./navigation/MyStack";

export default function App() {
  return <MyStack />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(221, 229, 233)",
  },
});
