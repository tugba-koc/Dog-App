const BASE_URL = 'https://dog.ceo/api'

// Fetch the all dog data
export const fetchDogData = async () => {
  try {
    let response = await fetch(BASE_URL + '/breeds/list/all');
    let res = await response.json();
    return res?.data;
  } catch (err) {
    console.log(err);
  }
};

// fetch the sub breed
export const fetchSubBreed = async (breed: string) => {
  try {
    let response = await fetch(BASE_URL + `/breed/${breed}/list`);
    let res = await response.json();
    return res?.data;
  } catch (err) {
    console.log(err);
  }
};

// fetch breed images
export const fetchBreedImages = async (breed: string, count: string) => {
  try {
    let response = await fetch(BASE_URL + `/breed/${breed}/images/random/${count}`);
    let res = await response.json();
    return res?.data;
  } catch (err) {
    console.log(err);
  }
};

// fetch subbreed images
export const fetchSubBreedImages = async (
  breed: string,
  subBreed: string,
  count: string
) => {
  try {
    let response = await fetch(BASE_URL +
      `/breed/${breed}/${subBreed}/images/random/${count}`
    );
    let res = await response.json();
    return res?.data;
  } catch (err) {
    console.log(err);
  }
};
