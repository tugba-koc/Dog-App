import { useDispatch } from 'react-redux';
import { ActionType } from '../../types/reducer';
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

  return (
    <DogFormContainer>
      <Dropdown title='Select an item' showError={false}>
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
    </DogFormContainer>
  );
}

export default DogForm;
