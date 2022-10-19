import { useDispatch } from 'react-redux';
import { ActionType, NumberAction } from '../../types/reducer';
import Dropdown from './Dropdown';
import { DogFormContainer } from './styles';

type Props = {
  breedList: Array<any>;
  subBreedList: Array<any>;
  images: Array<any>;
  isLoading: boolean;
};

function DogForm(props: Props) {
  const dispatch = useDispatch();
  const { breedList, subBreedList, images, isLoading } = props;
  const renderBreed = (value: string) => {
    dispatch({
      type: ActionType.BREED,
      payload: value,
    });
  };
  const renderSubBreed = (value: string) => {
    dispatch({
      type: ActionType.SUB_BREED,
      payload: value,
    });
  };
  const renderNumber = (value: string) => {
    dispatch({
      type: ActionType.NUMBER,
      payload: value,
    });
  }

  console.log(images);
  

  return (
    <DogFormContainer>
      <Dropdown title='Select a Breed' showError={false}>
        <select onChange={(e) => renderBreed(e.target.value)}>
          <option value='all'>Select Breeds</option>
          {breedList &&
            Object.keys(breedList)?.map((breed, index) => (
              <option value={breed} key={index}>
                {breed}
              </option>
            ))}
        </select>{' '}
      </Dropdown>
      <Dropdown title='Select a Sub Breed' showError={false}>
        <select onChange={(e) => renderSubBreed(e.target.value)}>
          <option value='all'>Select Sub Breed</option>
          {subBreedList &&
            subBreedList?.map((subbreed: string, index: number) => (
              <option value={subbreed} key={index}>
                {subbreed}
              </option>
            ))}
        </select>{' '}
      </Dropdown>
      <Dropdown title='Number of Images' showError={false}>
        <select onChange={(e) => renderNumber(e.target.value)}>
          <option value='all'>Select Number of Images</option>
          {/* {images &&
            images?.map((num: string, index: number) => (
              <option value={num} key={index}>
                {num}
              </option>
            ))} */}
        </select>{' '}
      </Dropdown>
    </DogFormContainer>
  );
}

export default DogForm;
