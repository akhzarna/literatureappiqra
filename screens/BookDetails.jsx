import { useRoute } from '@react-navigation/native'
import { FlatList } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
const BookDetails = () => {
  const route = useRoute();
  const { chapters } = route.params;
  console.log(chapters);
  return (
    <View>
      <FlatList
        data={chapters}
        key={1}
        // numColumns={3}
        // columnWrapperStyle={styles.columnWrapperStyle}
        // contentContainerStyle={styles.contentContainerStyle}

        renderItem={({ item }) => (
          <View style={[{paddingVertical:10, backgroundColor:'#d1d1f3', marginBottom:10}]} >
            <Text style={styles.imgName}>{item}</Text>
          </View>
        )} />
    </View>
  )
}
export default BookDetails
const styles = StyleSheet.create({
  chapter: {
    backgroundColor: '#b5b5ff'
  }
})