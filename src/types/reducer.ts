export enum ActionType {
  BREED = 'SET_BREED',
  SUB_BREED = 'SET_SUB_BREED',
  NUMBER = 'SET_NUMBER',
  IMAGE_RESULTS = 'SET_IMAGE_RESULTS',
  ERROR = 'SET_ERROR',
  RESET = 'SET_RESET',
}

export interface BreedAction {
  type: ActionType.BREED;
  payload: string;
}

export interface SubBreedAction {
  type: ActionType.SUB_BREED;
  payload: string;
}

export interface NumberAction {
  type: ActionType.NUMBER;
  payload: string;
}

export interface ImageResultsAction {
  type: ActionType.IMAGE_RESULTS;
  payload: number;
}

export interface ErrorAction {
  type: ActionType.ERROR;
  payload: boolean;
}

export interface ResetAction {
  type: ActionType.RESET;
  payload: IState;
}

export type IAction =
  | BreedAction
  | SubBreedAction
  | NumberAction
  | ImageResultsAction
  | ErrorAction
  | ResetAction;

export interface IState {
  breed: string;
  subBreed: string;
  number: string;
  imageResults: number;
  error: boolean;
}
