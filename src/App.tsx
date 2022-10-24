import './App.css';
import { AppBody, Container } from './Styles/styled';
import Header from './components/Header';
import { fetchBreedImages, fetchDogData, fetchSubBreed } from './axios/api';
import { useCallback, useEffect, useState } from 'react';
import DogForm from './components/DogForm';
import { useSelector } from 'react-redux';
import {
  selectBreedState,
  selectNumber,
  selectSubBreedState,
} from './redux/dog/dogReducer';

function App() {
  const [breedList, setbreedList] = useState<Array<any>>([]);
  const [subBreedList, setsubBreedList] = useState<Array<any>>([]);
  const [images, setimages] = useState<Array<any>>([]);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const breedState = useSelector(selectBreedState);
  const subBreedState = useSelector(selectSubBreedState);
  const numberState = useSelector(selectNumber);
  const fetchData = useCallback(async () => {
    await fetchDogData()
      .then((data) => {
        setbreedList(data?.message);
        setisLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
    if (breedState !== 'all') {
      await fetchSubBreed(breedState)
        .then((data) => {
          setsubBreedList(data?.message);
          setisLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    if (subBreedState !== 'all') {
      await fetchBreedImages(breedState, numberState)
        .then((data) => {
          setimages(data?.message);
          setisLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [breedState]);

  useEffect(() => {
    fetchData();
  }, [breedState, fetchData]);

  const props = {
    breedList: breedList,
    subBreedList: subBreedList,
    images: images,
    isLoading: isLoading,
    setimages: setimages,
    setisLoading: setisLoading,
  };

  console.log(images);
  

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      <Container>
        <AppBody>
          <DogForm {...props} />
        </AppBody>
      </Container>
    </>
  );
}

export default App;
