import './App.css';
import { AppBody, Container, Description } from './Styles/styled';
import Header from './components/Header';
import { fetchBreedImages, fetchDogData, fetchSubBreed } from './axios/api';
import { useCallback, useEffect, useState } from 'react';
import DogForm from './components/DogForm';
import { useSelector } from 'react-redux';
import { selectBreedState, selectNumber, selectSubBreedState } from './redux/dog/dogReducer';

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
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      <Container>
        <Description>
          <ul>
            This is a Dog App built with React JS Using the Dog API. The app
            uses:
            <li>ReactJS & TypeScript</li>
            <li>Redux for State Management</li>
            <li>Axios for fetching Data</li>
            <li>Styled Components</li>
            {/* <li> Unit Tests With Jest & React Testing Library</li> */}
          </ul>
          <br />
        </Description>
        <AppBody>
          <DogForm {...props} />
        </AppBody>
      </Container>
    </>
  );
}

export default App;
