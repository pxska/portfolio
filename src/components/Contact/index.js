import {useState} from 'react';
import Link from 'next/link';
import cc from 'classcat';

import styles from './Contact.module.scss';

import Twitter from '@assets/twitter.svg';

import {MdContentCopy, MdCheck} from 'react-icons/md';

function Contact() {
  const [animating, setAnimating] = useState(false);

  const copyToClipboard = () => {
    const link = document.getElementById('email');

    setAnimating(true);

    navigator.clipboard.writeText(link.innerText);

    setTimeout(() => setAnimating(false), 1000);
  };

  return (
    <div className="max-w-prose m-auto flex">
      <div className="w-full">
        <p className="mb-8">
          <span>Contact me at </span>
          <span id="email">kristjanposka@gmail.com</span>
          <button
            className="ml-1 align-middle relative"
            onClick={copyToClipboard}>
            <MdContentCopy
              className={cc([
                'fill-slate-900 hover:fill-slate-400',
                animating && 'invisible',
              ])}
            />

            <MdCheck
              className={cc([
                'fill-green-700 absolute top-0',
                !animating ? 'invisible' : 'visible',
              ])}
            />
          </button>
          <span> or just contact me on </span>
          <Twitter className="inline mr-1" width="16" height="16" />
          <Link
            className={styles.link}
            href="https://twitter.com/kristjanposka">
            @kristjanposka
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default Contact;
