import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import { appSocket } from '../services/socket-io';
import MonsterStatus from '../components/monster-status';
import Button from '../components/button';

const Home: FC = () => {
  useEffect(() => {
    appSocket.open();
  }, []);

  return (
    <div>
      <Head>
        <title>Monsters RPG</title>
      </Head>

      <main>
        <MonsterStatus
          name="Fire"
          level={1}
          xp={50}
          life={33}
          energy={100}
          side="left"
        />

        <MonsterStatus
          name="Water"
          level={1}
          xp={50}
          life={33}
          energy={90}
          side="right"
        />
        <Button bgcolor="red" textcolor="white" />
      </main>
    </div>
  );
};

export default Home;
