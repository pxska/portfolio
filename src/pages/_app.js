import {Inter, Newsreader} from '@next/font/google';

import '@/styles/globals.css';

import Head from 'next/head';

import {AnimatePresence} from 'framer-motion';

const inter = Inter({subsets: ['latin']});
const newsreader = Newsreader({subsets: ['latin']});

export default function App({Component, pageProps, router}) {
  return (
    <>
      <Head>
        <title>Kristjan Poska</title>
        <link rel="shortcut icon" href="favicon.ico" />

        <meta
          name="description"
          content="Kristjan Poska is a talented front-end developer and interaction design student with a passion for creating beautiful and user-friendly digital experiences. Learn more about Kristjan and his impressive skills and experience in web development and design."
        />
      </Head>
      <style jsx global>{`
        :root {
          --font-main: ${inter.style.fontFamily}, sans-serif;
          --font-serif: ${newsreader.style.fontFamily}, serif;
        }
      `}</style>
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  );
}
