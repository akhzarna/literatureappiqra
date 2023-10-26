import { StyleSheet, Text, View, Image, FlatList } from "react-native";

const PdfBooks = ({ booksData }) => {
  const data = booksData.data;
  const pdfBooks = data.filter((book) => book.bookType === "PDF");
  return (
    <View style={styles.bookContainer}>
      <FlatList
        data={pdfBooks}
        renderItem={({ item }) => (
          <View>
            <Image
              style={styles.cover}
              source={{
                uri: `http://139.59.177.72/${item.coverPhotoUri}`,
              }}
            />
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  cover: {
    height: 50,
    width: 50,
  },
});

export default PdfBooks;
