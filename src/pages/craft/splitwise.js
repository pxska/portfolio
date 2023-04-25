import BackLink from '@/components/BackLink';

import styles from '@styles/Index.module.scss';

const Splitwise = () => {
  return (
    <div className={styles.container}>
      <section className={styles.title}>
        <BackLink />
        Splitwise.&nbsp;
        <span className={styles.description}>
          An emotional expense tracking app.
        </span>
      </section>
    </div>
  );
};

export default Splitwise;
