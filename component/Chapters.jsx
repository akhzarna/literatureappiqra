import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { fetchApiData } from './ApiComponent';

export default function Chapters({ route }) {
  const { bookId } = route.params; // Get the bookId from the route params
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const fetchChaptersData = async () => {
      try {
        // Replace 'yourApiEndpoint' with the actual endpoint to fetch chapters data based on bookId
        const data = await fetchApiData(`http://139.59.177.72/api/books?page=1`);
        setChapters(data);
      } catch (error) {
        console.error('Error fetching chapters data:', error);
      }
    };

    fetchChaptersData();
  }, [bookId]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hello From Chapters</Text>
        <Text>Book ID: {bookId}</Text>
      </View>
      <FlatList
        data={chapters.data}
        keyExtractor={(item) => item.chapterId}
        renderItem={({ item }) => (
          <View style={styles.chapterItem}>
            <Text>{item.chapters}</Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  chapterItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    padding: 10,
  },
});
