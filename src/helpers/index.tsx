import { Dispatch } from 'react';
import { ActionType } from '../types/reducer';

const renderBreed = (value: string, dispatch: Dispatch<any>) => {
  dispatch({
    type: ActionType.BREED,
    payload: value,
  });
  dispatch({
    type: ActionType.SUB_BREED,
    payload: 'all',
  });
  dispatch({
    type: ActionType.ERROR,
    payload: false,
  });
};
const renderSubBreed = (value: string, dispatch: Dispatch<any>) => {
  dispatch({
    type: ActionType.SUB_BREED,
    payload: value,
  });
};
const renderNumber = (value: string, dispatch: Dispatch<any>) => {
  dispatch({
    type: ActionType.NUMBER,
    payload: value,
  });
};

export { renderBreed, renderSubBreed, renderNumber };
