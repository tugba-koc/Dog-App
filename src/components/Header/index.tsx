import { Container, LogoContainer, TitleContainer } from './styles';

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <img
          src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/labrador-retriever-dog-silhouette-kevin-garbes.jpg'
          alt='Dog App'
        />
      </LogoContainer>
      <TitleContainer>
        <h1>Dog Image Finder App</h1>
      </TitleContainer>
    </Container>
  );
};

export default Header;
