// src/components/DogGallery.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DogGallery.css';

const BASE_URL = 'https://dog.ceo/api';

const DogGallery = () => {
  const [dogImages, setDogImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/breeds/image/random/8`);
        const images = response.data.message.map((url, index) => ({
          id: index + 1,
          url: url,
          breed: extractBreedName(url),
          subBreeds: [],
        }));
        setDogImages(images);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dog images:', error);
        setLoading(false);
      }
    };

    fetchDogData();
  }, []);

  const extractBreedName = (url) => {
    const urlParts = url.split('/');
    const breedIndex = urlParts.findIndex((part) => part === 'breeds');
    return urlParts[breedIndex + 1];
  };

  const fetchSubBreeds = async (breed) => {
    try {
      const response = await axios.get(`${BASE_URL}/breed/${breed}/list`);
      return response.data.message.slice(0, 3);
    } catch (error) {
      console.error('Error fetching sub-breeds:', error);
      return [];
    }
  };

  const handleMouseEnter = async (index) => {
    if (dogImages[index].subBreeds.length === 0) {
      const subBreeds = await fetchSubBreeds(dogImages[index].breed);
      const updatedDogImages = [...dogImages];
      updatedDogImages[index].subBreeds = subBreeds;
      setDogImages(updatedDogImages);
    }
  };

  const handleMouseLeave = (index) => {
    const updatedDogImages = [...dogImages];
    updatedDogImages[index].subBreeds = [];
    setDogImages(updatedDogImages);
  };

  return (
    <div className="dog-gallery">
      <h1>Dog Gallery</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="gallery-grid">
          {dogImages.map((imageData) => (
            <div
              key={imageData.id}
              className="grid-item"
              onMouseEnter={() => handleMouseEnter(imageData.id - 1)}
              onMouseLeave={() => handleMouseLeave(imageData.id - 1)}
            >
              <img src={imageData.url} alt={`Dog ${imageData.id}`} />
              <div className="tooltip">
                {imageData.subBreeds.length > 0 ? (
                  <ul>
                    {imageData.subBreeds.map((subBreed, index) => (
                      <li key={index}>{subBreed}</li>
                    ))}
                  </ul>
                ) : (
                  <h2>{imageData.breed}</h2>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};  

export default DogGallery;
