import React, { FC } from 'react';
import { IMonsterStatus } from './interface';
import { XP, Level, Text, HeadImg, Bar } from './styles';

const MonsterStatus: FC<IMonsterStatus> = ({
  name,
  level,
  xp,
  life,
  energy,
  side
}) => {
  return (
    <div>
      <Level side={side}>{level}</Level>
      <XP progress={xp} side={side}>
        <svg>
          <circle cx="30" cy="30" r="30" />
          <circle cx="30" cy="30" r="30" />
        </svg>
      </XP>
      <HeadImg src={`/images/${name}/head.png`} side={side} />
      <Text side={side}>
        <p>{name}</p>
      </Text>
      <Bar progress={life} width={100} top={-45} color="red" side={side}>
        <div />
      </Bar>
      <Bar progress={energy} width={100} top={-33} color="#00ee00" side={side}>
        <div />
      </Bar>
    </div>
  );
};

export default MonsterStatus;
