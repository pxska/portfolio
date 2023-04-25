import BackLink from '@/components/BackLink';

import styles from '@styles/Index.module.scss';

const Playser = () => {
  return (
    <div className={styles.container}>
      <section className={styles.title}>
        <BackLink />
        Playser.&nbsp;
        <span className={styles.description}>
          Your personal musical companion.
        </span>
      </section>
    </div>
  );
};

export default Playser;
