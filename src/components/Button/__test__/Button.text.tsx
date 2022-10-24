import configureStore from 'redux-mock-store';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { GlobalStyle, theme } from '../../../lib/theme';
import { ThemeProvider } from 'styled-components';
import Button from '../index';
import { render, screen } from '@testing-library/react';

describe('Button renders correctly by using redux-mock', () => {
  const setimagesProp = jest.fn();
  const setisLoadingProp = jest.fn();
  test('Button renders correctly', () => {
    const initState = {
      breed: 'all',
      subBreed: 'all',
      number: '1',
      imageResults: 0,
      error: false,
    };

    const mockStore = configureStore();
    const dogStore = mockStore(initState);

    dogStore.clearActions();

    render(
      <Provider store={dogStore}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Button setimages={setimagesProp} setisLoading={setisLoadingProp} />
        </ThemeProvider>
      </Provider>
    );

    screen.debug()
  });
});
