import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { FlatList, Text, View } from "react-native";

function BookChapters() {

  const route = useRoute()

  const [chapters, setChapters] = useState([])

  useEffect(() => {

    setChapters(route.params.chapters);

  }, [])

  return (
    <View>
      <FlatList
        data={chapters}
        contentContainerStyle={{
          gap: 10,
          padding: 5
        }}
        renderItem={({ item, index }) => (
          <Text
            key={index}
            style={{
              padding: 10,
              color: 'white',
              fontWeight: 'bold',
              backgroundColor: 'grey',
              borderRadius: 10
            }}
          >{item}</Text>
        )}
      />
    </View>
  )

}

export default BookChapters