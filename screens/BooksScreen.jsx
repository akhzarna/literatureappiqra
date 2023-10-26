import { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
// import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { LoadingModal } from "react-native-loading-modal";
import useApi from '../component/useApi';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Book = () => {
  const [searchValue, setSearchValue] = useState("");
  const [noBooksFound, setNoBooksFound] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigation();

  // const [books, setBooks] = useState([]);
  const [unicodeBooks, setUnicodeBooks] = useState([]);
  const [pdfBooks, setPdfBooks] = useState([])
  const [filteredBooks, setFilteredBooks] = useState(pdfBooks);
  console.log(searchValue);

  function includesSearch(sValue, bookName) {
    return bookName.toLowerCase().includes(sValue.toLowerCase())
  }
  const baseURL = 'http://139.59.177.72/'
  const booksURL = 'http://139.59.177.72/api/books?page=1'

  useEffect(() => {
    (async () => {
      try {
        const books = await useApi(booksURL);
        setUnicodeBooks(books.filter(book => book.bookType === "UNICODE"))
        setPdfBooks(books.filter(book => book.bookType !== "UNICODE"))
        setFilteredBooks(pdfBooks);
        setLoading(false);
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  useEffect(() => {
    if (searchValue === "") {
      setFilteredBooks(pdfBooks);
      return;
    }
    const searchBooks = pdfBooks.filter(book => includesSearch(searchValue, book.title))
    if (searchBooks.length <= 0) {
      setNoBooksFound(true);
      return;
    }
    setFilteredBooks(searchBooks);
    setNoBooksFound(false);
  }, [searchValue])

  console.log(unicodeBooks);
  console.log(pdfBooks)

  return (
    <SafeAreaView style={{ paddingHorizontal: 20, paddingVertical: 20 }}>

      <LoadingModal modalVisible={loading} color='#fcce5c' />
      <View style={styles.booksContainer}>
        {
          unicodeBooks.length > 0 &&
          <FlatList
            data={unicodeBooks}
            horizontal={true}
            key={1}
            // numColumns={3}
            // columnWrapperStyle={styles.columnWrapperStyle}
            contentContainerStyle={styles.contentContainerStyle}

            renderItem={({ item }) => (
              <TouchableOpacity style={{ maxWidth: 100, columnGap: 10 }} onPress={navigate.navigate('BookDetails', { chapters: item.chapters })}>
                <View style={{ backgroundColor: '#e7e7e7', width: 100, height: 170, borderRadius: 10, }}>
                  <Image source={{ uri: `${baseURL}${item.coverPhotoUri}` }} style={styles.imgStyles} />
                </View>
                <Text style={styles.imgName}>{item.title}</Text>
              </TouchableOpacity>
            )} />
        }
      </View>

      <View style={{ marginTop: 10, backgroundColor: '#e7e7e7', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 30 }}>
        <TextInput style={{ fontSize: 20 }} placeholder='Search...' value={searchValue} onChangeText={setSearchValue} />
      </View>

      <View style={styles.booksContainer}>
        {!noBooksFound ?
          <FlatList
            data={filteredBooks}
            key={1}
            horizontal={true}
            // numColumns={3}
            // columnWrapperStyle={styles.columnWrapperStyle}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={({ item }) => (
              <View style={{ maxWidth: 100, columnGap: 10 }}>
                <View style={{ backgroundColor: '#e7e7e7', width: 100, height: 170, borderRadius: 10, }}>
                  <Image source={{ uri: `${baseURL}${item.coverPhotoUri}` }} style={styles.imgStyles} />
                </View>
                <Text style={styles.imgName}>{item.title}</Text>
              </View>
            )} />
          : <Text>No books found for {searchValue}</Text>
        }
      </View>
    </SafeAreaView>
  )
}
export default Book

const styles = StyleSheet.create({
  booksContainer: {
    paddingVertical: 20,
  },
  columnWrapperStyle: {
    gap: 10,
  },
  contentContainerStyle: {
    gap: 20
  },
  imgStyles: {
    objectFit: 'cover',
    borderRadius: 10,
    width: 100,
    height: 170,
  },
  imgName: {
    fontSize: 12,
  }
})