import axios from "axios";


const useApi = async (apiUrl) => {

	try {
		const response = await axios.get(apiUrl);
		return response.data.data;
	} catch (error) {
		throw error;
	}
};

export default useApi;
