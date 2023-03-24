import cc from 'classcat';

import Stagger from '@components/stagger';

import Link from 'next/link';

import styles from '@/styles/Index.module.scss';

function Intro() {
  return (
    <div className="flex">
      <div className="w-3/12 sm:hidden">
        <Stagger amount={0.5}>
          <h1 className="font-bold">Intro</h1>
        </Stagger>
      </div>

      <div className="w-9/12 sm:w-full">
        <div className="mb-8">
          <Stagger amount={0.5}>
            <h1 className="font-bold">Kristjan Poska</h1>
          </Stagger>
          <Stagger amount={0.75}>
            <em>
              A design engineer with a genuine passion for pixel-perfection
            </em>
          </Stagger>
        </div>

        <Stagger amount={1}>
          <p className="mb-8">
            I pay meticulous attention to detail in every aspect of my work,
            ensuring that the final product is visually flawless and perfectly
            aligned. My dedication speaks to my commitment to delivering
            high-quality results that meet and exceed client expectations.
          </p>

          <p className="mb-8">
            <span>Currently at </span>
            <Link
              className={cc([styles.link, styles.gt])}
              href="https://www.guardtime.com/"
            >
              Guardtime
            </Link>
            <span> & studying </span>
            <Link
              className={cc([styles.link, styles.ixd])}
              href="https://ixd.ma/"
            >
              Interaction Design
            </Link>
            <span> at the </span>
            <Link
              className={cc([styles.link, styles.artun])}
              href="https://www.artun.ee/"
            >
              Estonian Academy of Arts
            </Link>
            <span>.</span>
          </p>

          <p>
            <span>Previously I&apos;ve worked at </span>
            <Link
              className={cc([styles.link, styles.vg])}
              href="https://voog.com/"
            >
              Voog
            </Link>
            <span>
              {' '}
              & studied Computational Linguistics at the University of Tartu.
            </span>
          </p>
        </Stagger>
      </div>
    </div>
  );
}

export default Intro;
