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

        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2250%22 fill=%22%23000000%22></rect></svg>"
          media="(prefers-color-scheme: light)"
        />

        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2250%22 fill=%22%23ffffff%22></rect></svg>"
          media="(prefers-color-scheme: dark)"
        />

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

      <Component {...pageProps} />
    </>
  );
}
