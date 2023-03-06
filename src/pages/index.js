import Link from 'next/link';

import styles from '@/styles/Index.module.scss';

export default function Index() {
  return (
    <div className={styles.container}>
      <div style={{display: 'flex'}}>
        <div className={styles.left}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="8" fill="black" />
          </svg>
        </div>
        <div className={styles.right}>
          <div className={styles.head}>
            <h1>Kristjan Poska</h1>
            <em>
              Front-end developer with a sincere love for pixel perfection
            </em>
          </div>

          <p>
            I love to pay attention to every single detail and make the
            interface work smoothly for everyone.
          </p>

          <p>
            Currently at{' '}
            <Link href="https://www.guardtime.com/" className={styles.gt}>
              Guardtime
            </Link>{' '}
            & studying{' '}
            <Link className={styles.ixd} href="https://ixd.ma/">
              Interaction Design
            </Link>{' '}
            at the{' '}
            <Link className={styles.artun} href="">
              Estonian Academy of Arts
            </Link>
            .
          </p>
          <p>
            Previously I&apos;ve worked on{' '}
            <Link className={styles.vg} href="https://voog.com/">
              Voog
            </Link>{' '}
            & studied Estonian 🇪🇪 at the University of Tartu.
          </p>
        </div>
      </div>

      <hr />

      <div style={{display: 'flex'}}>
        <div className={styles.left}>
          <h1>Work</h1>
        </div>

        <div className={styles.right}>
          <p>
            Check out my latest projects. I promise you&apos;ll find something
            for your soul. If not, offer me something fulfilling to work on.
          </p>
          <ul>
            <li>
              <Link href="#">Work one</Link>
            </li>
            <li>
              <Link href="#">Work two</Link>
            </li>
            <li>
              <Link href="#">Work three</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
