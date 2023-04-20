import styles from './Container.module.scss';

function Container({className, children}) {
  return (
    <div className={className}>
      <div className={styles.blurred} />
      <div className="mt-32 pt-8 px-8">{children}</div>
    </div>
  );
}

export default Container;
