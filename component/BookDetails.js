import React from 'react'
import {View, Text, FlatList} from 'react-native'
import { useRoute } from '@react-navigation/native' 

function BookDetails() {
    const route = useRoute();
    const {chapters, title} = route.params;
  return (
    <View>
        <Text style = {{
            fontSize : 20,
            textAlign : "center",
            fontWeight : "bold"
        
        }}>
            {title}
        </Text>
        <FlatList
            data = {chapters}
            renderItem = {({item, index}) => <Text
                style = {{
                    fontSize : 15,
                    textAlign :  "right",
                }}
            >{index+1} - {item}</Text>}
        />
        
    </View>
  )
}

export default BookDetails