import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default Chapters = ({route, naviation})=>{
    const {chapters} = route.params;
    console.log(chapters)
    return(
        
        <View style={{paddingTop: 50}}>
            <Text> Chapters</Text>
            <ScrollView>
            {chapters.map((chapter)=>(
                <Text>
                    {chapter}
                </Text>
            ))}
            </ScrollView>
        </View>
    )
}