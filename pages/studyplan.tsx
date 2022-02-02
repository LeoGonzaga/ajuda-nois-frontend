import type { NextPage } from 'next';
import Head from 'next/head';

import StudyPlan from '../src/screens/StudyPlan';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Plano de Estudos</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StudyPlan />
    </>
  );
};

export default Home;
