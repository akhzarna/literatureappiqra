import { View, Text ,StyleSheet, TextInput} from 'react-native'
import React from 'react'
import ApiComponent from '../component/ApiComponent';
import Footer from '../component/Footer';

const Home = () => {
  return (
    <>
   
     <View style={styles.container}>
     <TextInput style={{borderColor:"gray",borderWidth:2,width:'100%',padding:10,borderRadius:20}} placeholder='Search'/>
     <ApiComponent/>
     <Footer></Footer>
    </View>
    </>
   
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal:10
    },
  });

export default Home