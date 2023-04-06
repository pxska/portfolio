import React, {useState} from 'react';

import styles from './Scroller.module.scss';

const COLORS = ['#FAC243', '#049463', '#B394DB', '#EA5B13', '#FC6B63'];

const Scroller = ({index, title}) => {
  const [isHovered, setIsHovered] = useState(false);
  const initialTransform = `${-index * 48}px`;
  const hoverTransform = `${-index * 48 - 48}px`;

  return (
    <a
      className={styles.scroller}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered
          ? `translateY(${hoverTransform})`
          : `translateY(${initialTransform})`,
        backgroundColor: isHovered
          ? COLORS[Math.floor(Math.random() * COLORS.length)]
          : 'white',
      }}>
      {title}
    </a>
  );
};

export default Scroller;
