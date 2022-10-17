// import * as ACTION_TYPES from '../actions/action_type';
import { IAction, ActionType, IState } from '../../types/reducer';

export const dogInitialState: IState = {
  breed: 'all',
  subBreed: 'all',
  number: '1',
  imageResults: 0,
  error: false,
};

const dogReducer = (state = dogInitialState, action: IAction): IState => {
  switch (action.type) {
    case ActionType.BREED:
      return {
        ...state,
        breed: action.payload,
      };
    case ActionType.SUB_BREED:
      return {
        ...state,
        subBreed: action.payload,
      };
    case ActionType.NUMBER:
      return {
        ...state,
        number: action.payload,
      };
    case ActionType.IMAGE_RESULTS:
      return {
        ...state,
        imageResults: action.payload,
      };
    case ActionType.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ActionType.RESET:
      return {
        breed: 'all',
        subBreed: 'all',
        number: '1',
        imageResults: 0,
        error: false,
      };
    default:
      return state;
  }
};

export default dogReducer;
