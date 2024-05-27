import axios from "axios";

export const catData = async (url: any, params?: any) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    // console.log(`this is errror: ${error}`);
    throw error; 
  }
};
