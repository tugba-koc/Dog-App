import { DogFormContainer } from './styles';

type Props = {
  breedList: Array<any>;
  subBreedList: Array<any>;
  images: Array<any>;
  isLoading: boolean;
};

function DogForm(props: Props) {
  return (
    <DogFormContainer>
      <p>Dog form</p>
    </DogFormContainer>
  );
}

export default DogForm;
