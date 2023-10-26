import { StyleSheet, Text, View, Image } from "react-native";
import Navbar from "../component/Navbar";
import PdfBooks from "../component/PdfBooks";
import UnicodeBooks from "../component/UnicodeBooks";
import useApiComponent from "../component/useApiComponent";
import { TextInput } from "react-native-paper";
const Home = () => {
  const { booksData } = useApiComponent();

  return (
    <View style={styles.container}>
      <Navbar />
      <TextInput style={styles.input} left={<TextInput.Icon icon="eye" />} />
      <PdfBooks booksData={booksData} />
      <UnicodeBooks booksData={booksData} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: "#f8fafc",
    alignItems: "center",
  },
  input: {
    marginTop: 20,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 8,
    width: "90%",
    borderWidth: 1,
    paddingLeft: 10,
  },
});
export default Home;
