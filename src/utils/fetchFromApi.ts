import axios from "axios";

// Configure options for sending requests to receive information from the server
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
    "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
  },
};

// A custom function to get information from the server based on parts of a specified URL
export const fetchFromApi = async (url: string) => {
  try {
    const { data } = await axios.get(
      `https://youtube-v31.p.rapidapi.com${url}`,
      options,
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
