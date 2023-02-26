import Link from 'next/link';

import styles from '@/styles/Index.module.scss';

export default function Index() {
  return (
    <>
      <section className={styles.bigtext}>
        Hey, my name is Kristjan. I am a front-end developer with a sincere love
        for <em>pixel perfection</em>. I strive for the highest possible quality
        in everything I do. I currently work as a front-end developer at{' '}
        <Link className={styles.gt} href="https://guardtime.com/">
          Guardtime
        </Link>{' '}
        and study{' '}
        <Link className={styles.ixd} href="https://ixd.ma/">
          Interaction Design
        </Link>{' '}
        at the Estonian Academy of Arts. In the past, I have worked on{' '}
        <Link className={styles.vg} href="https://voog.com/">
          Voog
        </Link>
        , the best CMS in the Baltics.
      </section>

      <section className={styles.bigtext}>
        If you&apos;d like to say hi, drop in on Twitter @kristjanposka.{' '}
        <s>Or write me an e-mail.</s>
      </section>
    </>
  );
}
