import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TextInput } from "react-native";
import axios from "axios";

const ApiComponent = () => {
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filteredData, setFilteredData] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://139.59.177.72/api/books?page=1"
        );
        setResponseData(response.data.data);
        setFilteredData(response.data.data);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  const renderCard = ({ item }) => {
    return (
      <View style={{ width: 150, height: 200, margin: 10 }}>
        <Image source={{ uri: `http://139.59.177.72/${item.coverPhotoUri}`}} style={styles.image} />
        <Text>{item.title}</Text>
      </View>
    );
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredResults = responseData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by title"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {loading ? (
        <Text>Loading data...</Text>
      ) : filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          renderItem={renderCard}
          keyExtractor={(item) => item._id}
          horizontal
        />
      ) : (
        <Text>No results found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginBottom: 10,
  },
});

export default ApiComponent;
