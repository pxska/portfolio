import Stagger from '@components/Stagger';

import {INITIAL_STAGGER_AMOUNT, STAGGER_ADD} from '@components/Intro';

import styles from './Craft.module.scss';

function Craft() {
  return (
    <div className="max-w-prose m-auto">
      <p className="mb-16">
        Behold, witness my latest endeavors! I guarantee a soul-stirring
        experience awaits you. And should you not find satisfaction, present to
        me a challenge worthy of my skills.
      </p>

      <div className={styles.cards}>
        <Stagger amount={INITIAL_STAGGER_AMOUNT + STAGGER_ADD * 4.5}>
          <div className="flex items-center pb-8 hover:text-gray-500 cursor-pointer transition-colors">
            <h1 className="text-7xl font-bold">1 PHÕÕN</h1>
            <span className="text-7xl font-bold ml-auto">{`->`}</span>
          </div>
        </Stagger>

        <Stagger amount={INITIAL_STAGGER_AMOUNT + STAGGER_ADD * 5}>
          <div className="flex items-center py-8 hover:text-gray-500 cursor-pointer transition-colors">
            <h1 className="text-7xl font-bold">2 INVL ⚔️ IXD</h1>
            <span className="text-7xl font-bold ml-auto">{`->`}</span>
          </div>
        </Stagger>
        <Stagger amount={INITIAL_STAGGER_AMOUNT + STAGGER_ADD * 5.5}>
          <div className="flex items-center pt-8 hover:text-gray-500 cursor-pointer transition-colors">
            <h1 className="text-7xl font-bold">3 SPLITWISE</h1>
            <span className="text-7xl font-bold ml-auto">{`->`}</span>
          </div>
        </Stagger>
      </div>
    </div>
  );
}

export default Craft;
