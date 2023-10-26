import React, { useState } from 'react'
import { View , Text, TextInput, TouchableOpacity , FlatList, Image } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import { MaterialIcons } from '@expo/vector-icons';

import useHookMuhammadMehroz from '../component/useHookMuhammadMehroz';

export default function Home() {
    // Navigation Hook
    const navigation = useNavigation();
    const [filter , setF] = useState();
    
    

    // getting the data
    const books = useHookMuhammadMehroz();
    const baseurl = "http://139.59.177.72/"
    console.log("Books from the Api",books) 
    if (!books || !books.data) {
        // Handle loading state, return a loading indicator or null
        return null;
      }
      const handleSearch = (query) => {
        setF(query);
        filteredBooks
    };

      const filteredBooks = books.data.filter(book => {
        return book.title.toLowerCase().includes(filter);
    });

    console.log("Filtered Books",filteredBooks)
      const UNICODE = books.data.filter(book => book.bookType === 'UNICODE');
      console.log("book chapters",UNICODE)

    

  return (
        <View style={{flex:1, backgroundColor:"lightgray"}}> 
            <View style = {{flex:0.2,backgroundColor:'seagreen', justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                <Text style={{fontSize:30, marginLeft:20}}>Featured</Text>
                <View style={{backgroundColor:'lightgray',flex:0.2,width:60,height:60,borderRadius:100,marginRight:30,right:0,position:'absolute',justifyContent:'center',alignItems:'center'}}>
                    <MaterialIcons name="message" size={24} color="black" />
                </View>
            </View>
            <View style={{flex:0.8,backgroundColor:'lightgry'}}>
                <View style={{flex:0.1,backgroundColor:'lightgray',justifyContent:'center',alignItems:'center'}}>
                    <TextInput
                    placeholder='Search'
                    style = {{width:'80%',height:'80%',fontSize:20,backgroundColor:'white',paddingLeft:30,borderRadius:10}}
                    value={filter}
                    onChangeText={handleSearch}

                    /> 
                </View>

                <View style={{flex:0.4 , width:"100%",backgroundColor:'gray'}}>
                <FlatList
                    data={UNICODE}
                    horizontal={true} // Set this to true for horizontal scrolling
                    
                    renderItem={({ item }) => (
                    <TouchableOpacity style={{width:150,height:150,backgroundColor:'white',margin:20,alignItems:'center',borderRadius:10}} onPress={()=>{
                        navigation.navigate("BookChapters",{'chapters':item.chapters,"BookTitle":item.title})
                      }} >
                        
                        <Image source={{ uri: baseurl + item.coverPhotoUri }} style={{ width: 90, height: 90 }} />
                        <Text style={{marginTop:20}}>{item.title}</Text>
                      </TouchableOpacity>
                    )}
                  />

                
            </View>

            


            </View>

           
        </View>
  )
}
