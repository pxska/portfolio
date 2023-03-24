import styles from './Stagger.module.scss';

function Stagger({children, amount}) {
  return (
    <div className={styles.staggered} style={{animationDelay: `${amount}s`}}>
      {children}
    </div>
  );
}

export default Stagger;
