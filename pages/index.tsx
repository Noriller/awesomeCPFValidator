import Head from 'next/head';
import React from 'react';
import Validator from '../src/components/validator/Validator';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Awesome CPF Validator</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Validator />
      </main>

      <footer className={styles.footer}>
        <a href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app' target='_blank' rel='noopener noreferrer'>
          Powered by <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
