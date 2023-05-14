import axios from "axios";

const BASE_URL = 'https://reqres.in/api/users?page=1'

export const getAllUsers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      return response?.data?.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  