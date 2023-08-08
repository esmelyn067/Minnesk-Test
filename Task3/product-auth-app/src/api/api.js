import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Your backend server URL here

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await api.post('/login', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const addProduct = async (productData, token) => {
  try {
    const response = await api.post('/products', productData, {
      headers: {
        'x-auth-token': token,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
