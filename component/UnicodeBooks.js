import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

const UnicodeBooks = ({ booksData, navigation }) => {
  const data = booksData.data;
  const unicodeBooks = data.filter((book) => book.bookType === "UNICODE");
  return (
    <View style={styles.bookContainer}>
      <Text style={styles.searchText}>Searchable Books</Text>
      <FlatList
        data={unicodeBooks}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.push("Unicode", {
                chaptersList: item.chapters,
              })
            }
          >
            <View>
              <Image
                style={styles.cover}
                source={{
                  uri: `http://139.59.177.72/${item.coverPhotoUri}`,
                }}
              />
              <Text>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  cover: {
    height: 100,
    width: 100,
  },
  searchText: {
    fontSize: 32,
    color: "#fff",
  },
});

export default UnicodeBooks;
