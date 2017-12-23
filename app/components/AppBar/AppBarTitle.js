import styled from 'styled-components';

const AppBarTitle = styled.h1`
  margin: 0;
  display: inline-block;
  color:  ${(props) => props.theme.titleColor};
  font-family: sans-serif;
  font-weight: normal;
  font-size: 1.5em;
`;

export default AppBarTitle;
