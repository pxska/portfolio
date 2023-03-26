import styles from './Container.module.scss';

function Container({children, shouldAnimate}) {
  return (
    <div
      className="max-w-prose m-auto mt-32 mb-32 px-8"
      data-animate={shouldAnimate}
    >
      <div className={styles.blurred}></div>
      {children}
    </div>
  );
}

export default Container;
