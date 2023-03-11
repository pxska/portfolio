import Link from 'next/link';

import styles from '@/styles/Index.module.scss';

function Work() {
  return (
    <div className="flex">
      <div className="w-3/12">
        <h1 className="font-bold">Work</h1>
      </div>

      <div className="w-9/12">
        <p className="mb-8">
          Check out my latest projects. I promise you&apos;ll find something for
          your soul. If not, offer me something fulfilling to work on.
        </p>
        <ul>
          <li className="list-none pb-2 pl-2">
            <Link className={styles.link} href="#">
              Work one
            </Link>
          </li>
          <li className="list-none pb-2 pl-2">
            <Link className={styles.link} href="#">
              Work two
            </Link>
          </li>
          <li className="list-none pb-2 pl-2">
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
