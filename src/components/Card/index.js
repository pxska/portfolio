import styles from './Card.module.scss';

const Card = ({icon, title, description, backgroundColor}) => {
  return (
    <div className={styles.card} style={{backgroundColor}}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.description}>
        <span className={styles.title}>{title}&nbsp;</span>
        {description}
      </div>
    </div>
  );
};

export default Card;
