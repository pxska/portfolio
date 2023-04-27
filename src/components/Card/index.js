import styles from './Card.module.scss';

const COLORS = ['#DCB481', '#C09E85', '#E0D0C3', '#90837A', '#B9B99D'];

const Card = ({href, icon, title, description}) => {
  return (
    <a
      href={href}
      className={styles.card}
      style={{
        backgroundColor: COLORS[Math.floor(Math.random() * COLORS.length)],
      }}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.description}>
        <span className={styles.title}>{title}&nbsp;</span>
        {description}
      </div>
    </a>
  );
};

export default Card;
