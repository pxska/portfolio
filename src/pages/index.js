import Card from '@components/Card';

import styles from '@styles/Index.module.scss';
import Link from 'next/link';

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

const Index = () => {
  const shuffledColors = shuffle([
    '#DCB481',
    '#C09E85',
    '#E0D0C3',
    '#90837A',
    '#B9B99D',
  ]);

  return (
    <div className={styles.container}>
      <section className={styles.title}>
        Kristjan Poska.&nbsp;
        <span className={styles.description}>
          A design engineer with a love for pushing boundaries.
        </span>
      </section>

      <section className={styles.cards}>
        <Card
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#F2F1EF">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          }
          title="Phõõn ~ a safe space."
          description="You might not always want to burden your loved ones with your problems. Go for a walk in the nature and talk to Phõõn."
          backgroundColor={shuffledColors[0]}
          href="/craft/phoon"
        />
        <Card
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#F2F1EF">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
              />
            </svg>
          }
          title="Give me back my money!"
          description="Alright, hear me out – a life insurance company, but they give you back all the money you've paid. Sounds crazy? Yes."
          backgroundColor={shuffledColors[1]}
          href="/craft/invl"
        />
        <Card
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#F2F1EF">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
          }
          title="Ugh, I hate tracking my expenses."
          description="How might we make sharing expenses a more emotional experience for people on the Splitwise application?"
          backgroundColor={shuffledColors[2]}
          href="/craft/splitwise"
        />
        <Card
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#F2F1EF">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
              />
            </svg>
          }
          title="A laser gun for making music."
          description="An instrument you would play in your 16 square metre apartment in the year 2123. And it's anything you could have ever dreamed of."
          backgroundColor={shuffledColors[3]}
          href="/craft/playser"
        />
      </section>

      <section className={styles.contact}>
        <div>
          <span className={styles.bold}>Would you like to work with me?</span>
          &nbsp;Send me an e-mail at <button>kristjanposka@gmail.com</button>!
        </div>
        <div>
          <span className={styles.bold}>Want to see more of what I do?</span>
          &nbsp;Check out my Twitter account&nbsp;
          <Link href="https://twitter.com/kristjanposka">@kristjanposka</Link>
          &nbsp;or follow me on Instagram&nbsp;
          <Link href="https://instagram.com/kristjanposka">@kristjanposka</Link>
          .
        </div>
      </section>
    </div>
  );
};

export default Index;
