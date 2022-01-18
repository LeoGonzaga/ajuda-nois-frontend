import type { NextPage } from 'next';
import Head from 'next/head';

import Login from '../src/screens/Login';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Login />
    </>
  );
};

export default Home;
