import axios from "axios";

export const fetchDataFromFakeApi = async (url: any, parms?: any) => {
  try {
    const response = await axios.get(url);
    if (response) {
      console.log(response);
      return response.data;
    }
  } catch (error) {
    console.log(`error: ${error}`);
    return [];
  }
};

export const fetchDataFromFakeApi2 = async (url: any, parms?: any) => {
    try {
      const response = await axios.get(url);
      if (response) {
        console.log(response);
        return response.data;
      }
    } catch (error) {
      console.log(`error: ${error}`);
      return [];
    }
  };
  
