import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import { appSocket } from '../services/socket-io';

const Home: FC = () => {
  useEffect(() => {
    appSocket.open();
  }, []);

  return (
    <div>
      <Head>
        <title>Monsters RPG</title>
      </Head>

      <main />
    </div>
  );
};

export default Home;
