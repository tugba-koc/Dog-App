import './App.css';
import { AppBody, Container, Description } from './Styles/styled';
import Header from './components/Header';
import { fetchDogData } from './axios/api';
import { useEffect, useState } from 'react';
import DogForm from './components/DogForm';

function App() {
  const [breedList, setbreedList] = useState<Array<any>>([]);
  const [subBreedList, setsubBreedList] = useState<Array<any>>([]);
  const [images, setimages] = useState<Array<any>>([]);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const fetchData = async () => {
    try {
      let res = await fetchDogData();
      setbreedList(res.message);
      setisLoading(true);
    } catch (err) {
      console.log(err);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
