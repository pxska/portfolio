import styles from './Container.module.scss';

function Container({children, shouldAnimate}) {
  return (
    <div
      className="mt-32 mb-32 px-8 overflow-hidden"
      data-animate={shouldAnimate}>
      <div className={styles.blurred}></div>
      {children}
    </div>
  );
}

export default Container;
