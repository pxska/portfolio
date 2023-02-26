import '@/styles/globals.css';
import Head from 'next/head';

export default function App({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Kristjan Poska</title>
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
