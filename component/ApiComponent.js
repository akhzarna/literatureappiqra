import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

const ApiComponent = () => {
	
	useEffect(() => {
		// Define the API endpoint
		const apiUrl = "http://139.59.177.72/api/books?page=1"; // Example API
		// Make an API request
		axios
			.get(apiUrl)
			.then((response) => {
				// console.log("API Response:", response.data);
				let pdf = [];
				let unicode = [];

				for (let index = 0; index < response.data.data.length; index++) {
					const element = response.data.data[index];
					if (element.bookType === "UNICODE"){
						unicode.push(element)
					}
					else{
						pdf.push(element)
					}
				}
				

				AsyncStorage.setItem("pdf", JSON.stringify(pdf)).then((value)=>{
					AsyncStorage.getItem("pdf").then((data)=>{
						// console.log("pdf")
						// console.log(pdf)
					})
				})
				AsyncStorage.setItem("unicode", JSON.stringify(unicode)).then((value)=>{
					AsyncStorage.getItem("unicode").then((data)=>{
						// console.log("UNICODE")
						// console.log(unicode);
					})
				})
				
			})
			.catch((error) => {
				console.error("API Error:", error);
			});
	}, []);

	return (
		<View>
			<Text>Check the console for API response</Text>
		</View>
	);
};

export default ApiComponent;