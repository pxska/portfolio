import React from 'react';

import Scroller from '@components/Scroller';

import styles from './Scroller.module.scss';

const FONT_SIZE = 96;
const LINE_HEIGHT = 1.5;

const ScrollerContainer = ({scrollerData, onBackgroundChange}) => {
  const containerHeight =
    FONT_SIZE * LINE_HEIGHT * scrollerData.length -
    (scrollerData.length - 1) * 48;

  return (
    <div
      className={styles.scrollerContainer}
      style={{
        height: `${containerHeight}px`,
      }}>
      {scrollerData.map(({title, href, as, tags}, index) => (
        <Scroller
          onClick={onBackgroundChange}
          key={index}
          index={index}
          title={title}
          as={as}
          href={href}
          tags={tags}
          staggerAmount={index * 0.25}
        />
      ))}
    </div>
  );
};

export default ScrollerContainer;
