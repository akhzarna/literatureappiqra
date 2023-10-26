import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, FlatList, StyleSheet, TouchableOpacity,Image } from "react-native";
import { Searchbar } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

const ApiComponent = () => {
	const [data, setData] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");


	useEffect(() => {
		const apiUrl = "http://139.59.177.72/api/books?page=1";


		axios
			.get(apiUrl)
			.then((response) => {
				console.log("API Response:", response.data.data);
				setData(response.data.data);

			})
			.catch((error) => {
				console.error("API Error:", error);

			});
	}, []);
	const getUrduTitle = (book) => {
		if (book.chapters.length > 0) {
		  return book.chapters[0];
		} else {
		  return "Urdu Title Not Available";
		}
	  };
	  const filteredData = data.filter((item) =>
	  getUrduTitle(item).toLowerCase().includes(searchQuery.toLowerCase())
	);


	return (
		<View style={{ flex: 1, }}>
			<View style={{ flex: 0.15, justifyContent: 'space-between', alignItems: 'center' }}>
				<View><Text style={{ fontSize: 20, marginTop: 50, fontWeight: 'bold' }}>Featured</Text></View>
			</View>
			<View style={{ flex: 0.10, backgroundColor: '#ededed', justifyContent: 'center', alignItems: 'center' }}>
				<Searchbar
					placeholder="Search"
					style={{ width: '80%', backgroundColor: 'white', height: 55, borderRadius: 20, borderWidth: 1 }}
					value={searchQuery}
					onChangeText={(text) => setSearchQuery(text)}


				/>
			</View>
			<View style={{ flex: 0.45 }}>
				<FlatList
					data={data}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item) => item._id}
					renderItem={({ item }) => (
						<View style={styles.item}>
							<Image
								source={{ uri: "http://139.59.177.72/" + item.coverPhotoUri }}
								style={styles.thumbnail}
							/>
							<Text style={{marginTop:5}}>{getUrduTitle(item)}</Text>
							
						</View>
					)}
				/>
			</View>
			<View style={{ flex: 0.45, marginTop: 5 }}>
				<Text style={{ color: '#002078', fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Searchable Books</Text>

				<FlatList
					data={data}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item) => item._id}
					renderItem={({ item }) => (
						<View style={styles.item}>
							<Image
								source={{ uri: "http://139.59.177.72/" + item.coverPhotoUri }}
								style={styles.thumbnail}
							/>
							<Text style={{marginTop:5}}>{getUrduTitle(item)}</Text>
							
						</View>
					)}
				/>
			</View>
			<View style={{ flex: 0.12, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#002078', flexDirection: 'row' }}>
				<TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
					<FontAwesome name="book" size={20} style={{ color: 'white' }} />
					<Text style={styles.navColor}>Home</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
					<FontAwesome name="headphones" size={20} style={{ color: 'white' }} />
					<Text style={styles.navColor}>Audio Books</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
					<FontAwesome name="gear" size={20} style={{ color: 'white' }} /><Text style={styles.navColor}>Settings</Text></TouchableOpacity>
				<TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
					<FontAwesome name="search" size={20} style={{ color: 'white' }} /><Text style={styles.navColor}>Search</Text></TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: 'grey'
	},
	item: {
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
		padding: 10,
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		
		
	},
	navColor: {
		color: 'white',
	},thumbnail: {
		width: 150, // Adjust the width and height as needed
		height: 150,
		marginRight: 10,
	  },
});

export default ApiComponent;

