import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ApiComponent from "./component/ApiComponent";
import React, { useState } from 'react';

export default function App() {
	const [searchText, setSearchText] = useState(''); // Initialize with an empty string
	return (
		<View style={styles.container}>
			<View>
				<Text style={{ textAlign: 'center', fontSize: 20, marginTop: 10 }}>Feature</Text>
			</View>
			<View style={{ flex: 0.10,justifyContent:'center',alignItems:'center' }}>
				<TextInput
					style={styles.searchInput}
					placeholder="Search books..."
					onChangeText={(text) => setSearchText(text)}
					value={searchText}
				/>
			</View>

			<ApiComponent />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	searchInput: {
		height: 40,
		width: 300,
		borderColor: 'gray',
		borderWidth: 1,
		paddingHorizontal: 8,
		marginBottom: 16,
	},

});
