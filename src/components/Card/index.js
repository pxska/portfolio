import Link from 'next/link';
import React from 'react';

import styles from './Card.module.scss';

function Card({title, description, link}) {
  return (
    <div className="h-32 flex flex-col justify-center">
      <div className="uppercase font-bold">{title}</div>
      <p>{description}</p>

      <Link className={styles.readMore} href={link}>{`Read more ->`}</Link>
    </div>
  );
}

export default Card;
