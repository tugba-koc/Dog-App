import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { Container } from './styles';

function DogInfo() {
  const dogStore = useSelector((state: RootState) => state.dogReducer);
  const imageResultsState = dogStore?.imageResults;

  return (
    <Container>
      <>
        {imageResultsState} results
      </>
    </Container>
  );
}

export default DogInfo;
