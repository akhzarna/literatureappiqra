import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Chapters = () => {

  const route = useRoute();
  const { chapters } = route.params; // Assuming chapters is passed as a parameter in the navigation route.

  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10,marginTop:10 }}>Chapters</Text>
      <FlatList
        data={chapters}
        keyExtractor={(item, index) => index.toString()} // Use index as the key
        renderItem={({ item, index }) => (
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 16 }}>{`Chapter ${index + 1}: ${item}`}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Chapters;
