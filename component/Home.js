import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
export default Home = () => {
  const [pdf, setPdf] = useState(null);
  const [unicode, setUnicode] = useState(null);

  useEffect(()=>{
    AsyncStorage.getItem("pdf").then((data)=>{
      console.log("PDF----")
      console.log(data);
      setPdf(JSON.parse(data));
    })

    AsyncStorage.getItem("unicode").then((data)=>{
      console.log("UNICODEEE----")
      console.log(data);
      setUnicode(JSON.parse(data));
    })
  },[])
  const renderPdf = ({ item }) => (
    <View style={{ flex:1,  padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc', paddingLeft: 15, paddingTop: '15%' }}>
    <Image source={{ uri: "http://139.59.177.72/" + item.coverPhotoUri }} style={styles.image} />
      <Text>{item.title}</Text>
      {console.log(item.coverPhotoUri)}
      
      
    </View>
  );

  const renderUnicode = ({ item }) => (
    
    <View style={{ flex:1,  padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc', paddingLeft: 15, paddingTop: '15%' }}>
    <TouchableOpacity>
    <Image source={{ uri: "http://139.59.177.72/" + item.coverPhotoUri }} style={styles.image} />
      <Text>{item.title}</Text>
      {console.log(item.coverPhotoUri)}
      
      </TouchableOpacity>  
    </View>
    
  );
  
  const data = [
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
    
    // Add more items as needed
  ];
  return (
    <>
      <FlatList style={{paddingTop: 25}}
        data={pdf}
        renderItem={renderPdf}
        keyExtractor={item => item.id}
        horizontal={true}
      />

<FlatList
        data={unicode}
        renderItem={renderUnicode}
        keyExtractor={item => item.id}
        horizontal={true}
      />

    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 100,
    height: 150,
    marginRight: 10,
    marginBottom: 20,
    borderRadius: 2, // for circular images, adjust the border radius accordingly
  },


});