import React, { FC } from 'react';
import { IButton } from './interface';
import { Container } from './styles';

const Button: FC<IButton> = ({ bgcolor, textcolor }) => {
  const handleClick = () => {
    alert('fechar');
  };

  return (
    <Container
      bgcolor={bgcolor}
      textcolor={textcolor}
      onClick={() => handleClick()}
    >
      x
    </Container>
  );
};

export default Button;
