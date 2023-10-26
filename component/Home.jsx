import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList, TouchableOpacity, Image, SectionList } from 'react-native';
import { fetchApiData } from './ApiComponent';

import { useNavigation } from '@react-navigation/native';


const numColumns = 3;

export default function Home() {
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState('');
  const [booksData, setBooksData] = useState(null);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchApiData('http://139.59.177.72/api/books?page=1');
        setBooksData(data);
        console.log(booksData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  
  const handleSearch = (text) => {
    setSearchText(text);
  };

  const handlePress = (bookId) => {
    // Navigate to the "Chapters" screen with the bookId as a prop
    navigation.navigate('Chapters', { bookId });
  };
  
//   const filteredData = booksData.data.filter((item) =>
//     item.name.toLowerCase().includes(searchText.toLowerCase())
//   );

    
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.blueBar}></View>

      <View style={styles.booksHeading}>
           <Text style={styles.headingText}>Books</Text>
      </View>

      <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        onChangeText={handleSearch} // Step 2: Attach the onChangeText event
        value={searchText} // Step 2: Set the value of the input
      />
      </View>

      {booksData ? (
        <SectionList
          sections={[
            {
              title: "Unicode",
              data: booksData.data.filter((item) => item.bookType === "UNICODE"),
            },
            {
              title: "PDF",
              data: booksData.data.filter((item) => item.bookType === "PDF"),
            },
          ]}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{section.title}</Text>
            </View>
          )}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handlePress(item._id)} // Pass the bookId as a parameter
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  backgroundColor: "lightgrey",
                  height: 300,
                  marginBottom: 1,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      width: 110,
                      height: 200,
                      overflow: "hidden",
                    }}
                    source={{
                      uri: `http://139.59.177.72/${encodeURI(item.coverPhotoUri)}`,
                    }}
                    alt='Loading...'
                  />
                  <Text
                    numberOfLines={1}
                    style={{
                      fontWeight: 'bold',
                      marginTop: 25,
                      width: '100%',
                      textAlign: 'center',
                      color: 'black',
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item._id}
        />
      ) : (
        <Text>Loading...</Text>
      )}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  blueBar:{
    backgroundColor: '#1E90FF',
    width: '100%',
    height: 50,
  },
  booksHeading:{
    backgroundColor: 'white',
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchBar: {
    width: '80%',
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  searchContainer: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  }

  
});


{/* <Image
                style={{
                  width: 110,
                  height: 200,
                  overflow: "hidden",
                  
                }}
                source={item.img}
                alt='Loading...'
              /> */}