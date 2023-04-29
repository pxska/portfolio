import Card from '@components/Card';

import styles from '@styles/Index.module.scss';
import Link from 'next/link';

import Phone from '@assets/icons/phone.svg';
import Bills from '@assets/icons/bills.svg';
import Stocks from '@assets/icons/stocks.svg';
import Note from '@assets/icons/note.svg';

const Index = () => {
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
          index={0}
          icon={<Phone />}
          title="Phõõn ~ a safe space."
          description="You might not always want to burden your loved ones with your problems. Go for a walk in the nature and talk to Phõõn."
          href="/craft/phoon"
        />
        <Card
          index={1}
          icon={<Bills />}
          title="Give me back my money!"
          description="Alright, hear me out – a life insurance company, but they give you back all the money you've paid. Sounds crazy? Yes."
          href="/craft/invl"
        />
        <Card
          index={2}
          icon={<Stocks />}
          title="Ugh, I hate tracking my expenses."
          description="How might we make sharing expenses a more emotional experience for people on the Splitwise application?"
          href="/craft/splitwise"
        />
        <Card
          index={3}
          icon={<Note />}
          title="A laser gun for making music."
          description="An instrument you would play in your 16 square metre apartment in the year 2123. And it's anything you could have ever dreamed of."
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
