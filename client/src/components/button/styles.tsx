import styled from 'styled-components';
import { IButton } from './interface';

const Container = styled.div<IButton>`
  color: ${(props) => props.textcolor};
  background-color: ${(props) => props.bgcolor};
  padding: 6px 4px;
  text-align: center;
  width: 30px;
  border-radius: 5px;
  box-shadow: 0px 0px 4px black;
  cursor: pointer;
`;

export { Container };
