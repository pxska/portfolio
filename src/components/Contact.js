import cc from 'classcat';
import {useState} from 'react';
import Link from 'next/link';

import styles from '@/styles/Index.module.scss';

import Twitter from '../assets/twitter.svg';

function Contact() {
  const [animating, setAnimating] = useState(false);

  const copyToClipboard = () => {
    const link = document.getElementById('email');
    setAnimating(true);

    navigator.clipboard.writeText(link.innerText);
  };

  return (
    <div className="flex">
      <div className="w-3/12 sm:hidden">
        <h1 className="font-bold">Contact</h1>
      </div>

      <div className="w-9/12 sm:w-full">
        <p className="mb-8">
          <span>Contact me at </span>
          <button
            id="email"
            className={cc([styles.link, animating && 'animate-wiggle'])}
            onClick={copyToClipboard}
            onAnimationEnd={() => setAnimating(false)}
          >
            kristjanposka@gmail.com
          </button>
          <span className="text-gray-500">
            {' <– click it to copy to clipboard '}
          </span>
          <span>or just contact me on </span>
          <Twitter className="inline mr-1" width="16" height="16" />
          <Link
            className={styles.link}
            href="https://twitter.com/kristjanposka"
          >
            @kristjanposka
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default Contact;
