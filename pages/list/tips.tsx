import React from 'react';

import Head from 'next/head';
import Tips from 'src/screens/List/Tips';

const SubjectPageList = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>AjudaNois | Dicas</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tips />
    </>
  );
};

export default SubjectPageList;
