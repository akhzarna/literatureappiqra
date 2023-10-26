import React, {useState, useEffect} from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ApiComponent from "./ApiComponent";
import BooksList from "./BooksList";
function Books({}) {
  const books = ApiComponent();
  const [searchText, setSearchText] = useState("");
    const [bookData, setBookData] = useState([])
  useEffect(()=>{
    if(searchText.length > 0){
        console.log(searchText)
      const filteredBooks = books.data.filter((book)=>{
        return book.title.includes(searchText)
      })
      console.log(filteredBooks)
      setBookData(filteredBooks)
    }
    else{
      setBookData(books)
    }
  }, [searchText, books])
  // console.log("THis is book data",books)
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          felx: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "row",
          padding: 10,
          gap: 10,
        }}
      >
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 10,
            flexGrow: 1,
            height: 50,
            padding: 10,
            margin: 10,
          }}
          onChangeText={(text) => {
            setSearchText(text);
          }}
          placeholder="Book name"
        />
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            borderRadius: 10,
            padding: 10,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            Search
          </Text>
        </TouchableOpacity>
      </View>
      
      <BooksList books={bookData} bookType = 'PDF'/>
      <BooksList books={books} bookType = "UNICODE" />
    </View>
  );
}

export default Books;
