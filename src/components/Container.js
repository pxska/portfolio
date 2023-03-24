import styles from './Container.module.scss';

function Container({children}) {
  return (
    <div className="max-w-prose m-auto mt-32 mb-32 px-8">
      <div className={styles.blurred}></div>
      {children}
    </div>
  );
}

export default Container;
