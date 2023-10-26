import React from 'react'
import { View, Text , FileList, FlatList} from 'react-native'
import {useRoute } from '@react-navigation/native'
export default function BooksChapters() {

    const route = useRoute();
  const data= route.params.chapters;
  const tile = route.params.BookTitle;
  console.log("username",data,tile)
  return (
    <View style={{flex:1,backgroundColor:"lightgray",alignItems:'center'}}>
        <View style={{flex:0.1,width:'100%', backgroundColor:'seagreen',justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:30,color:'white'}}>Book Chapters</Text></View>

        <View>
            <FlatList
             data={data}
             renderItem={({ item }) => (
               <View style={{width:150,height:150,backgroundColor:'white',margin:20,alignItems:'center',borderRadius:10}}  >
                 
                 <Text style={{marginTop:20}}>{item}</Text>
               </View>
             )}
            />

        </View>
    </View>
  )
}
