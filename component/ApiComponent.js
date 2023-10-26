import axios from "axios";
import React, { useEffect, useState } from "react";
import chapters from "./chapters";

import {
	TextInput, TouchableOpacity, StyleSheet, View, Text,
	FlatList, Image
} from 'react-native';

let link;
const navigateToNewPage = (item) => {
	console.log("CONSOLE IS  ", item.chapters)
};

const Item = ({ item, index }) => {
	link = 'http://139.59.177.72/' + item[index].coverPhotoUri;
	console.log("I'm here   ", link);
	return (
		<View style={styles.itemContainer}>
			<View style={{ backgroundColor: 'red' }}>
				<Image
					source={{ uri: link }}
					style={styles.image}
					onError={(error) => console.error('Image load error:', error)}
				/>
			</View>
			<TouchableOpacity onPress={() => navigateToNewPage(item[index])}>

				<Text>Author Name: {item[index].author.name}</Text>
				<Text>BOOK: {item[index].category.name}</Text>
			</TouchableOpacity>
		</View>)
}



const setAllData = (setData, setBpiArray, setFlag, response) => {

	setData(response);
	//console.log("RESPONSE IS: ", response.data[0].author);
	const bpiData = response.data[0].author;
	setBpiArray([bpiData]);
	setFlag(false);
}

const ApiCall = (setData, setBpiArray, setFlag, setUnicodeBooks, setPdfBooks, searchable) => {
	const apiUrl = "http://139.59.177.72/api/books?page=1"; // Example API


	axios
		.get(apiUrl)
		.then((response) => {
			const unicodeBooks = [];
			const pdfBooks = [];
			const unicodeBooksArray = [];
			const pdfArray = [];


			//console.log(response.data.data);

			response.data.data.forEach((book) => {
				if (book.bookType === "UNICODE") {
					unicodeBooks.push(book);
					unicodeBooksArray.push(unicodeBooks);
				} else {
					pdfBooks.push(book);
					pdfArray.push(pdfBooks);
				}

			});


			setUnicodeBooks(unicodeBooksArray);
			setPdfBooks(pdfArray);
			setAllData(setData, setBpiArray, setFlag, response.data);
			console.log("UChanges is    ", unicodeBooks);
			console.log("===========================\n\n\n");
			console.log("Uni code books are ", searchable);
			//console.log("========================== = \n");
			//console.log("PDF books are ",pdf[0]);


		})
		.catch((error) => {
			console.error("API Error: ", error);
		});
};


const ApiComponent = () => {
	const [dataV, setData] = useState({});
	const [bpiArray, setBpiArray] = useState([]);
	const [flag, setFlag] = useState(true);
	const [searchable, setUnicodeBooks] = useState([]);
	const [pdf, setPdfBooks] = useState([]);

	useEffect(() => {
		setPdfBooks([]);
		setUnicodeBooks([]);
		ApiCall(setData, setBpiArray, setFlag, setUnicodeBooks, setPdfBooks, searchable);
	}, []); // Run the effect only once

	if (flag) {
		return (
			<View style={styles.container}>
				<Text>Loading...</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>

			<Text style={{ color: 'blue', fontSize: 18 }}>PDF are</Text>
			<FlatList
				data={pdf}
				renderItem={({ item, index }) => <Item item={item} index={index} />}
				numColumns={2}
				keyExtractor={(item, index) => item.__v}
			/>

			<Text style={{ color: 'blue', fontSize: 18 }}>Searchabel Book</Text>
			<FlatList
				data={searchable}
				renderItem={({ item, index }) => <Item item={item} index={index} />}
				keyExtractor={(item, index) => item.__v}
			/>
			<View>

			</View>

		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	itemContainer: {
		flex: 0.5,
		margin: 10
	},
	img: {
		width: 100,
		height: 100,
	},
});

export default ApiComponent;
