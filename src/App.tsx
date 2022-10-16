import './App.css';
import { Container, Description } from './Styles/styled';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Description>
          <ul>
            This is a Dog App built with React JS Using the Dog API. The app
            uses:
            <li>ReactJS & TypeScript</li>
            <li>Redux for State Management</li>
            <li>Axios for fetching Data</li>
            <li>Styled Components</li>
            {/* <li> Unit Tests With Jest & React Testing Library</li> */}
          </ul>
          <br />
        </Description>
      </Container>
    </>
  );
}

export default App;
