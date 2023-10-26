import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
function Home() {
    const navigation = useNavigation();
  return (
    <View style = {{flex : 1, justifyContent: "center", alignItems : "center"}}>
        <TouchableOpacity onPress = {() => navigation.navigate("Books") } style = {
            {
                width : 80,
                height : 40,
                backgroundColor : "black",
                justifyContent : "center",
                alignItems : "center",
                borderRadius : 10
            }
        }>
            <Text
                style = {{
                    color : "white"
                }}
            >Books</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Home