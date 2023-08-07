import axios from 'axios';

const BASE_URL = 'https://dog.ceo/api';

// Function to fetch a specified number of random dog images
export const fetchRandomDogImages = async (count) => {
  try {
    const response = await axios.get(`${BASE_URL}/breeds/image/random/${count}`);
    return response.data.message; // Return an array of image URLs
  } catch (error) {
    console.error('Error fetching random dog images:', error);
    return []; // Return an empty array in case of an error
  }
};

// Function to fetch a list of all dog breeds
export const fetchAllDogBreeds = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/breeds/list/all`);
    return Object.keys(response.data.message); // Return an array of dog breed names
  } catch (error) {
    console.error('Error fetching all dog breeds:', error);
    return []; // Return an empty array in case of an error
  }
};

export const fetchSubBreeds = async (breed) => {
  try {
    const response = await axios.get(`${BASE_URL}/breed/${breed}/list`);
    return response.data.message;
  } catch (error) {
    console.error(`Error fetching sub-breeds for ${breed}:`, error);
    return [];
  }
};
