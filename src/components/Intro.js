import cc from 'classcat';

import Stagger from '@components/Stagger';

import Link from 'next/link';

import styles from '@/styles/Index.module.scss';

export const INITIAL_STAGGER_AMOUNT = 0.15;
export const STAGGER_ADD = 0.15;

function Intro() {
  return (
    <div className="max-w-prose m-auto flex">
      <div className="w-full">
        <div className="mb-8">
          <Stagger amount={INITIAL_STAGGER_AMOUNT}>
            <h1 className="font-bold">Kristjan Poska</h1>
          </Stagger>

          <Stagger amount={INITIAL_STAGGER_AMOUNT + STAGGER_ADD}>
            <em>
              A design engineer with a love of pushing the boundaries of
              what&apos;s possible
            </em>
          </Stagger>
        </div>

        <Stagger amount={INITIAL_STAGGER_AMOUNT + STAGGER_ADD * 2}>
          <p className="mb-8">
            I pay meticulous attention to detail in every aspect of my work,
            ensuring that the final product is visually flawless and perfectly
            aligned. My dedication speaks to my commitment to delivering
            high-quality results that meet and exceed client expectations.
          </p>

          <p>
            <span>I currently align pixels at </span>
            <Link
              className={cc([styles.link, styles.gt])}
              href="https://www.guardtime.com/">
              Guardtime
            </Link>
            <span> & study </span>
            <Link
              className={cc([styles.link, styles.ixd])}
              href="https://ixd.ma/">
              Interaction Design
            </Link>
            <span> at the </span>
            <Link
              className={cc([styles.link, styles.artun])}
              href="https://www.artun.ee/">
              Estonian Academy of Arts
            </Link>
            <span>.</span>
          </p>
        </Stagger>
      </div>
    </div>
  );
}

export default Intro;
