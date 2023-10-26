import { StyleSheet, Text, View, Image, FlatList } from "react-native";

const SingleBook = ({ chapterList }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={chapterList}
        renderItem={(item) => (
          <Text style={{ fontFamily: "JannaLt-Regular" }}>{item}</Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default SingleBook;
