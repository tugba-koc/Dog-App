import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchBreedImages, fetchSubBreedImages } from '../../axios/api';
import { RootState } from '../../redux/store';
import { ActionType } from '../../types/reducer';
import { FetchButton, ResetButton } from './styles';

interface Props {
  setimages: React.Dispatch<React.SetStateAction<any[]>>;
  setisLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function Button({ setimages, setisLoading }: Props) {
  const dispatch = useDispatch();

  const dogStore = useSelector((state: RootState) => state.dogReducer);

  const breedState = dogStore?.breed;
  const subBreedState = dogStore?.subBreed;
  const numberState = dogStore?.number;

  const handleImagesFetch = async () => {
    if (breedState === 'all') {
      dispatch({
        type: ActionType.ERROR,
        payload: true,
      });
    }
    if (breedState !== 'all' && subBreedState === 'all') {
      await fetchBreedImages(breedState, numberState)
        .then((data) => {
          if (data?.status === 'success' && data?.message?.length) {
            setimages(data?.message);
            setisLoading(false);
            dispatch({
              type: ActionType.IMAGE_RESULTS,
              payload: data?.message.length,
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
    if (breedState !== 'all' && subBreedState !== 'all') {
      await fetchSubBreedImages(breedState, subBreedState, numberState)
        .then((data) => {
          if (data?.status === 'success' && data?.message?.length) {
            setimages(data?.message);
            setisLoading(false);
            dispatch({
              type: ActionType.IMAGE_RESULTS,
              payload: data?.message.length,
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <>
      <FetchButton role='button' onClick={() => handleImagesFetch()}>
        Search Dogs
      </FetchButton>
      <ResetButton
        role='button'
        onClick={() => {
          dispatch({
            type: ActionType.RESET,
          });
        }}
      >
        Reset Search
      </ResetButton>
    </>
  );
}

export default Button;
