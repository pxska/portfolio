import styles from './Card.module.scss';

const Card = ({backgroundColor, href, icon, title, description}) => {
  return (
    <a href={href} className={styles.card} style={{backgroundColor}}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.description}>
        <span className={styles.title}>{title}&nbsp;</span>
        {description}
      </div>
    </a>
  );
};

export default Card;
