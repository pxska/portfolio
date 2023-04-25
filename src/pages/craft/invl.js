import BackLink from '@/components/BackLink';

import styles from '@styles/Index.module.scss';

const INVL = () => {
  return (
    <div className={styles.container}>
      <section className={styles.title}>
        <BackLink />
        INVL.&nbsp;
        <span className={styles.description}>
          The company with the wildest ideas.
        </span>
      </section>
    </div>
  );
};

export default INVL;
