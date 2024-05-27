import axios from "axios";

export const getRequest = async (url: any, params?: any) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const addData = async (url: any, payload?: any) => {
  try {
    await axios.post(url, payload);
  } catch (error) {
    console.log(`error: ${error}`);
    return [];
  }
};

export const handleDelete = async (id: any) => {
  try {
    const response = await axios.delete(`https://65b37959770d43aba479d655.mockapi.io/foods/${id}`);
    return response;
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

// export async function axiosGet2(url: any, payload?: any) {
//   try {
//     const response = await axios.get(url, {
//       params: payload,
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//         "X-Requested-With": "XMLHttpRequest",
//       },
//     });
//     return response.data;
//   } catch (e) {
//     return e;
//   }
// }

// export async function axiosPost2(url: any, payload?: any) {
//   const response = await axios.post(url, payload, {
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       "X-Requested-With": "XMLHttpRequest",
//     },
//   });
//   if (response.data) {
//     return response.data;
//   } else {
//     return [];
//   }
// }

// export const getDirectData = (payload: any) => {
//   const url = "https://65b37959770d43aba479d655.mockapi.io/foods";
//   return axiosPost2(url, payload);
// };
