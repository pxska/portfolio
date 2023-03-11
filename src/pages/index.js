import Link from 'next/link';

import styles from '@/styles/Index.module.scss';

export default function Index() {
  const copyToClipboard = () => {
    const link = document.getElementById('email');

    navigator.clipboard.writeText(link.innerText);
  };

  return (
    <div className="max-w-3xl m-auto mt-32 px-8">
      <div className="flex">
        <div className="w-3/12">
          <svg
            width="40"
            height="40"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="8" fill="black" />
          </svg>
        </div>
        <div className="w-9/12">
          <div className="mb-8">
            <h1 className="font-bold">Kristjan Poska</h1>
            <em>
              A front-end developer with a genuine passion for pixel-perfection.
            </em>
          </div>

          <p className="mb-8">
            I pay meticulous attention to detail in every aspect of my work,
            ensuring that the final product is visually flawless and perfectly
            aligned. My dedication speaks to my commitment to delivering
            high-quality results that meet and exceed client expectations.
          </p>

          <p className="mb-8">
            <span>Currently at </span>
            <Link href="https://www.guardtime.com/" className={styles.gt}>
              Guardtime
            </Link>
            <span> & studying </span>
            <Link className={styles.ixd} href="https://ixd.ma/">
              Interaction Design
            </Link>
            <span> at the </span>
            <Link className={styles.artun} href="">
              Estonian Academy of Arts
            </Link>
            <span>.</span>
          </p>

          <p>
            <span>Previously I&apos;ve worked on </span>
            <Link className={styles.vg} href="https://voog.com/">
              Voog
            </Link>
            <span>
              {' '}
              & studied Computational Linguistics at the University of Tartu.
            </span>
          </p>
        </div>
      </div>

      <hr className="my-16" />

      <div className="flex">
        <div className="w-3/12">
          <h1 className="font-bold">Work</h1>
        </div>

        <div className="w-9/12">
          <p className="mb-8">
            Check out my latest projects. I promise you&apos;ll find something
            for your soul. If not, offer me something fulfilling to work on.
          </p>
          <ul>
            <li className="list-none pb-2 pl-2">
              <Link href="#">Work one</Link>
            </li>
            <li className="list-none pb-2 pl-2">
              <Link href="#">Work two</Link>
            </li>
            <li className="list-none pb-2 pl-2">
              <Link href="#">Work three</Link>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-16" />

      <div className="flex">
        <div className="w-3/12">
          <h1 className="font-bold">Contact</h1>
        </div>

        <div className="w-9/12">
          <p className="mb-8">
            <span>Contact me at </span>
            <button
              id="email"
              className={styles.emailLink}
              onClick={copyToClipboard}
            >
              kristjanposka@gmail.com
            </button>
            <span className="text-gray-500">
              {' <– click it to copy to clipboard.'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
