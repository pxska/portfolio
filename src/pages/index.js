import Link from 'next/link';
import styles from '@/styles/Index.module.scss';

export default function Index() {
  return (
    <>
      <h1 className={styles.heading}>Kristjan Poska</h1>

      <section className={styles.section}>
        <p>
          Striving for <em>perfection</em> in everything I do. Experimenting
          with all the unseen details in user interfaces. Front-end developer at{' '}
          <Link href="https://guardtime.com/">Guardtime</Link>. Interaction
          Design student at <Link href="https://ixd.ma/">ixd.ma</Link>.
        </p>

        <p>
          In the past, I&apos;ve blown steam off at{' '}
          <Link href="https://voog.com/">Voog</Link> to build the best CMS in
          the Baltics.
        </p>
      </section>
    </>
  );
}
