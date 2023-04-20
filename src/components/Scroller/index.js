import React, {useState, useEffect} from 'react';

import styles from './Scroller.module.scss';

import Link from 'next/link';

const COLORS = [
  '#FAC243',
  '#049463',
  '#B394DB',
  '#EA5B13',
  '#FC6B63',
  '#C2847A',
];

const Scroller = ({index, title, href, tags, staggerAmount}) => {
  const [anchorElementWidth, setAnchorElementWidth] = useState(null);

  const [isMobile, setIsMobile] = useState(false);
  const [anchorDisabled, setAnchorDisabled] = useState();
  const [isHovered, setIsHovered] = useState(false);
  const [includeXStyles, setIncludeXStyles] = useState(false);
  const [widthFromViewport, setWidthFromViewport] = useState(0);

  const initialTransform = `${-index * 48}px`;
  const hoverTransform = `${-index * 48 - 48}px`;

  let currentRandomColor = COLORS[Math.floor(Math.random() * COLORS.length)];

  const scrollerStyles = {
    transform: isHovered
      ? `translateY(${hoverTransform})`
      : `translateY(${initialTransform})`,
    backgroundColor: isHovered ? currentRandomColor : 'white',
    animationDelay: `${staggerAmount}s`,
  };

  const handleMouseEnter = event => {
    const elementWidth = event.currentTarget.scrollWidth;
    const viewportWidth = window.innerWidth;

    if (!anchorElementWidth) {
      setAnchorElementWidth(elementWidth);
      setWidthFromViewport(viewportWidth - elementWidth);

      if (elementWidth > viewportWidth) {
        setIncludeXStyles(true);
      }
    } else {
      setWidthFromViewport(viewportWidth - anchorElementWidth);

      if (anchorElementWidth > viewportWidth) {
        setIncludeXStyles(true);
      }
    }

    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setWidthFromViewport(0);
    setIncludeXStyles(false);
    setIsHovered(false);
  };

  const handleLinkClick = event => {
    if (isMobile && anchorDisabled) {
      event.preventDefault();
      setAnchorDisabled(false);
    }
  };

  const handleWindowSizeChange = () => {
    setAnchorElementWidth(null);
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    setAnchorDisabled(window.innerWidth <= 768);

    window?.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window?.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <Link
      onClick={handleLinkClick}
      href={`${href}?title=${encodeURIComponent(
        title
      )}&color=${encodeURIComponent(currentRandomColor)}`}
      className={styles.scroller}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={scrollerStyles}
      passHref>
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
    </Link>
  );
};

export default Scroller;
