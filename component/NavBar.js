import React from 'react'
import {View, Text} from 'react-native'

function NavBar() {
  return (
    <View style = {{
        width : "100%",
        height : 50,
        backgroundColor : "black",
        justifyContent : "center",
        alignItems : "center"
    
    }}><Text
        style = {{
            color : "white",
            fontSize : 20        
        }}
    >Featured</Text></View>
  )
}

export default NavBar