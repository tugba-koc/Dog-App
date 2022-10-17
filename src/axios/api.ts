import instance from './instance';
import axios from 'axios';

// Fetch the all dog data
export const fetchDogData = async () => {
  try {
    let response = await instance.get('/breeds/list/all');
    console.log(response?.data);
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};

// fetch the sub breed
export const fetchSubBreed = async (subBreed: string) => {
  try {
    let response = await instance.get(`/breed/${subBreed}/list`);
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};

// fetch breed images
export const fetchBreedImages = async (breed: string, count: string) => {
  try {
    let response = await instance.get(`/breed/${breed}/images/random/${count}`);
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};

// fetch subbreed images
export const fetchSubBreedImages = async (breed: string, subBreed: string, count: string) => {
    try {
      let response = await instance.get(`/breed/${breed}/${subBreed}/images/random/${count}`);
      return response?.data;
    } catch (err) {
      console.log(err);
    }
  };
