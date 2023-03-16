import Link from 'next/link';

import styles from '@/styles/Index.module.scss';

function Work() {
  return (
    <div className="flex">
      <div className="w-3/12 sm:hidden">
        <h1 className="font-bold">Work</h1>
      </div>

      <div className="w-9/12 sm:w-full">
        <p className="mb-8">
          Behold, witness my latest endeavors! I guarantee a soul-stirring
          experience awaits you. And should you not find satisfaction, present
          to me a challenge worthy of my skills.
        </p>
        <ul>
          <li className="list-none pb-2">
            <Link className={styles.link} href="#">
              Work one
            </Link>
          </li>
          <li className="list-none pb-2">
            <Link className={styles.link} href="#">
              Work two
            </Link>
          </li>
          <li className="list-none pb-2">
            <Link className={styles.link} href="#">
              Work three
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Work;
