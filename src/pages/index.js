import {useEffect, useState} from 'react';
import fs from 'fs';
import matter from 'gray-matter';

import Card from '@components/Card';

import styles from '@styles/Index.module.scss';

import Phone from '@assets/icons/phone.svg';
import Bills from '@assets/icons/bills.svg';
import Stocks from '@assets/icons/stocks.svg';
import Note from '@assets/icons/note.svg';

import {BiCopy, BiCheck} from 'react-icons/bi';

export async function getStaticProps() {
  try {
    const files = fs.readdirSync('public/posts');

    const posts = files.map(fileName => {
      const slug = fileName.replace('.md', '');
      const readFile = fs.readFileSync(`public/posts/${fileName}`, 'utf-8');

      const {data: frontmatter} = matter(readFile);

      return {
        slug,
        frontmatter,
      };
    });

    return {
      props: {posts},
    };
  } catch (error) {
    console.error(error);

    return {
      props: {},
    };
  }
}

const COLORS = ['#DCB481', '#C09E85', '#E0D0C3', '#90837A', '#B9B99D'];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function getIcon(fmIcon) {
  switch (fmIcon) {
    case 'phone':
      return <Phone />;
    case 'bills':
      return <Bills />;
    case 'stocks':
      return <Stocks />;
    case 'note':
      return <Note />;
  }
}

const Index = ({posts}) => {
  const [copyIcon, setCopyIcon] = useState(<BiCopy />);
  const [shuffledArray, setShuffledArray] = useState([]);

  useEffect(() => {
    setShuffledArray(shuffle(COLORS));
  }, []);

  const copyContent = async () => {
    await navigator.clipboard.writeText('kristjanposka@gmail.com').then(() => {
      setCopyIcon(<BiCheck />);

      setTimeout(() => {
        setCopyIcon(<BiCopy />);
      }, 1000);
    });
  };

  return (
    <div className={styles.container}>
      <section className={styles.title}>
        Kristjan Poska.
        <br />
        <span className={styles.description}>
          A design engineer with a love for pushing boundaries.
        </span>
      </section>

      <section className={styles.cards}>
        {posts.map(({slug, frontmatter}, index) => (
          <Card
            key={slug}
            backgroundColor={shuffledArray[index]}
            icon={getIcon(frontmatter.icon)}
            title={frontmatter.title}
            description={frontmatter.description}
            href={`/craft/${slug}`}
          />
        ))}
      </section>

      <section className={styles.contact}>
        <div>
          <span className={styles.bold}>Would you like to work with me?</span>
          &nbsp;Send me an e-mail at{' '}
          <a href="mailto:kristjanposka@gmail.com?subject=I want to work with you, Kristjan">
            kristjanposka@gmail.com
          </a>
          <button className="align-middle ml-1" onClick={copyContent}>
            {copyIcon}
          </button>
          &nbsp;and I promise to get back to you as soon as possible.
        </div>
        <div>
          <span className={styles.bold}>Want to see more of what I do?</span>
          &nbsp;Check out my Twitter account&nbsp;
          <a href="https://twitter.com/kristjanposka">@kristjanposka</a>
          &nbsp;or follow me on Instagram&nbsp;
          <a href="https://instagram.com/kristjanposka">@kristjanposka</a>. You
          can also check out my CV at{' '}
          <a href="https://read.cv/poska">read.cv</a>.
        </div>
      </section>
    </div>
  );
};

export default Index;
