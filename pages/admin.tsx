import React from 'react';

import Head from 'next/head';

import { default as AdminDashboard } from '../src/screens/DashBoard/Admin';

const AdminPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Dash</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminDashboard />
    </>
  );
};

export default AdminPage;
