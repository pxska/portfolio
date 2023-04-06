import React from 'react';

import Scroller from '@components/Scroller';

import styles from './Scroller.module.scss';

const FONT_SIZE = 92;
const LINE_HEIGHT = 1.5;

const LENGTH_WITH_SCROLLING = FONT_SIZE * LINE_HEIGHT * 3 - (3 - 1) * 48;

const ScrollerContainer = ({scrollerData}) => {
  const containerHeight =
    FONT_SIZE * LINE_HEIGHT * scrollerData.length -
    (scrollerData.length - 1) * 48;

  return (
    <div
      className={styles.scrollerContainer}
      style={{
        height: `${containerHeight}px`,
        top: `calc(100vh - ${LENGTH_WITH_SCROLLING}px)`,
      }}>
      {scrollerData.map((title, index) => (
        <Scroller key={index} index={index} title={title} />
      ))}
    </div>
  );
};

export default ScrollerContainer;
