import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import { appSocket } from '../services/socket-io';
import TopBar from '../components/top-bar';

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
        <TopBar />
      </main>
    </div>
  );
};

export default Home;
