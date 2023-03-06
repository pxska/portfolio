import {Inter, Newsreader} from '@next/font/google';

import '@/styles/globals.css';

import Head from 'next/head';

const inter = Inter({subsets: ['latin']});
const newsreader = Newsreader({subsets: ['latin']});

export default function App({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Kristjan Poska</title>
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <style jsx global>{`
        :root {
          --font-main: ${inter.style.fontFamily}, sans-serif;
          --font-serif: ${newsreader.style.fontFamily}, serif;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
