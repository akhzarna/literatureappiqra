import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const ApiComponent = () => {
  const [booksData, setBooksData] = useState([]);
  useEffect(() => {
    // Define the API endpoint
    const apiUrl = "http://139.59.177.72/api/books?page=1"; // Example API
    // Make an API request
    axios
      .get(apiUrl)
      .then((response) => {
        setBooksData(response.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);

  return { booksData };
};

export default ApiComponent;
