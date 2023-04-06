import React, {useState} from 'react';

import styles from './Scroller.module.scss';

const COLORS = ['#FAC243', '#049463', '#B394DB', '#EA5B13', '#FC6B63'];

const Scroller = ({index, title, href, tags, staggerAmount}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [includeXStyles, setIncludeXStyles] = useState(false);
  const [widthFromViewport, setWidthFromViewport] = useState(0);

  const initialTransform = `${-index * 48}px`;
  const hoverTransform = `${-index * 48 - 48}px`;

  const scrollerStyles = {
    transform: isHovered
      ? `translateY(${hoverTransform})`
      : `translateY(${initialTransform})`,
    backgroundColor: isHovered
      ? COLORS[Math.floor(Math.random() * COLORS.length)]
      : 'white',
    animationDelay: `${staggerAmount}s`,
  };

  const handleMouseEnter = event => {
    const anchorElementWidth = event.target.scrollWidth;
    const viewportWidth = window.innerWidth;

    setWidthFromViewport(viewportWidth - anchorElementWidth);

    if (anchorElementWidth > viewportWidth) {
      setIncludeXStyles(true);
    }

    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setWidthFromViewport(0);
    setIncludeXStyles(false);
    setIsHovered(false);
  };

  return (
    <a
      href={href}
      className={styles.scroller}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={scrollerStyles}>
      <div
        style={{
          ...(includeXStyles && {
            transform: `translateX(${widthFromViewport}px)`,
          }),
        }}>
        <span>{title}</span>
        {tags.map(tag => (
          <div className={styles.tag} key={tag}>
            {tag}
          </div>
        ))}
      </div>
    </a>
  );
};

export default Scroller;
