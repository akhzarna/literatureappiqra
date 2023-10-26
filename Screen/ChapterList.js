import React from 'react';
import { View, Text, FlatList } from 'react-native';

const ChapterList = ({ route }) => {
  const { chapterList } = route.params;

  return (
    <View>
      <Text>ChapterList</Text>
      <FlatList
        data={chapterList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default ChapterList;
