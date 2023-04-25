import BackLink from '@/components/BackLink';

import styles from '@styles/Index.module.scss';

const Phoon = () => {
  return (
    <div className={styles.container}>
      <section className={styles.title}>
        <BackLink />
        Phõõn.&nbsp;<span className={styles.description}>A safe space.</span>
      </section>
    </div>
  );
};

export default Phoon;
