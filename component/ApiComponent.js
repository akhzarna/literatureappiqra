import axios from "axios";

export const getApiData = () => {
	return new Promise((res, rej) => {
		try {
			const apiUrl = "http://139.59.177.72/api/books?page=1";
			axios
				.get(apiUrl)
				.then((response) => {

					res(response.data)
				})
				.catch((error) => {
					console.error("API Error:", error);
					rej(error)
				});
		} catch (error) {
			rej(error)
		}
	})
}
