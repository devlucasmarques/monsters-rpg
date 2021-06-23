import React, { FC } from 'react';
import MonsterStatus from '../monster-status';
import Button from '../button';
import { Container, ContainerStatus, Versus } from './styles';

const TopBar: FC = () => {
  return (
    <Container>
      <Button bgcolor="red" textcolor="white" />
      <ContainerStatus>
        <MonsterStatus
          name="Fire"
          level={1}
          xp={50}
          life={33}
          energy={100}
          side="left"
        />
        <Versus>VS</Versus>
        <MonsterStatus
          name="Water"
          level={1}
          xp={50}
          life={33}
          energy={90}
          side="right"
        />
      </ContainerStatus>
    </Container>
  );
};

export default TopBar;
