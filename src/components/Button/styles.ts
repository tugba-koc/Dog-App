import styled from 'styled-components';

export const FetchButton = styled.button`
  appearance: button;
  background-color: ${(props) => props.theme.button};
  border-radius: 6px;
  border-width: 0;
  color: ${(props) => props.theme.light};
  cursor: pointer;
  height: 44px;
  line-height: 1.15;
  margin: 20px 0;
  outline: none;
  padding: 0 25px;
  text-align: center;
  width: 140px;
`;

export const ResetButton = styled(FetchButton)`
  color: ${(props) => props.theme.error};
  border: 1px solid ${(props) => props.theme.error};
  margin-top: 0px;
  background-color: transparent;
  :hover {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.error};
  }
`;