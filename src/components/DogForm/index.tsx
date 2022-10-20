import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { renderBreed, renderNumber, renderSubBreed } from '../../helpers';
import {
  selectBreedState,
  selectError,
  selectNumber,
  selectSubBreedState,
} from '../../redux/dog/dogReducer';
import Button from '../Button';
import Dropdown from './Dropdown';
import { DogFormContainer } from './styles';

type Props = {
  breedList: Array<any>;
  subBreedList: Array<any>;
  images: Array<any>;
  isLoading: boolean;
  setimages: React.Dispatch<React.SetStateAction<any[]>>;
  setisLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

function DogForm(props: Props) {
  const dispatch = useDispatch();
  const {
    breedList,
    subBreedList,
    images,
    isLoading,
    setimages,
    setisLoading,
  } = props;

  const breedState = useSelector(selectBreedState);
  const subBreedState = useSelector(selectSubBreedState);
  const numberState = useSelector(selectNumber);
  const errorState = useSelector(selectError);

  return (
    <DogFormContainer>
      <Dropdown title='Select a Breed' showError={errorState}>
        <select
          onChange={(e) => renderBreed(e.target.value, dispatch)}
          value={breedState}
        >
          <option value='all'>Select Breeds</option>
          {breedList &&
            Object.keys(breedList)?.map((breed, index) => (
              <option value={breed} key={index}>
                {breed}
              </option>
            ))}
        </select>{' '}
      </Dropdown>
      {subBreedList.length ? (
        <Dropdown title='Select a Sub Breed' showError={errorState}>
          <select
            onChange={(e) => renderSubBreed(e.target.value, dispatch)}
            value={subBreedState}
          >
            <option value='all'>Select Sub Breed</option>
            {subBreedList &&
              subBreedList?.map((subbreed: string, index: number) => (
                <option value={subbreed} key={index}>
                  {subbreed}
                </option>
              ))}
          </select>{' '}
        </Dropdown>
      ) : null}

      <Dropdown title='Number of Images'>
        <select
          onChange={(e) => renderNumber(e.target.value, dispatch)}
          value={numberState}
        >
          <option value='all'>Select Number of Images</option>
          {Array.from({ length: 50 }, (_, i) => (
            <option value={i + 1} key={i}>
              {i + 1}
            </option>
          ))}
        </select>{' '}
      </Dropdown>
      <Button setimages={setimages} setisLoading={setisLoading} />
    </DogFormContainer>
  );
}

export default DogForm;
