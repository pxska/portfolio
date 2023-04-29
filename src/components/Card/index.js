import {useEffect, useState} from 'react';

import styles from './Card.module.scss';

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const Card = ({index, href, icon, title, description}) => {
  const [backgroundColorArray, setBackgroundColorArray] = useState([
    '#DCB481',
    '#C09E85',
    '#E0D0C3',
    '#90837A',
    '#B9B99D',
  ]);

  useEffect(() => {
    setBackgroundColorArray(array => shuffle(array));
  }, []);

  return (
    <a
      href={href}
      className={styles.card}
      style={{backgroundColor: backgroundColorArray[index]}}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.description}>
        <span className={styles.title}>{title}&nbsp;</span>
        {description}
      </div>
    </a>
  );
};

export default Card;
