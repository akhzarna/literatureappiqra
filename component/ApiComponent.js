
import axios from "axios";

export const fetchData = async () => {
  try {
    const apiUrl = "http://139.59.177.72/api/books?page=1"; 
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
