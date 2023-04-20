import React from 'react';

import ScrollerContainer from '@/components/Scroller/ScrollerContainer';
import Stagger from '@/components/Stagger';

import {GiPush, GiMonkeyWrench} from 'react-icons/gi';

const SCROLLER_DATA = [
  {
    title: 'Meet Phõõn ~ a safe space',
    href: '/craft/intro',
    tags: ['intro', 'fun'],
  },
  {
    title: 'I want my money back',
    href: '/craft/service',
    tags: ['serious', 'service'],
  },
  {
    title: 'A laser gun. But for music',
    href: '/craft/tangible',
    tags: ['tangible', 'fun'],
  },
  {
    title: 'From chore to excitement',
    href: '/craft/emotions',
    tags: ['visual', 'emotional'],
  },
];

const Index = () => {
  return (
    <div data-animate className="min-h-screen flex flex-col justify-between">
      <div className="pt-8 px-8">
        <h1 className="text-8xl mb-8 uppercase font-semibold md:text-4xl">
          Kristjan Poska
        </h1>

        <Stagger amount={0.25}>
          <em className="text-4xl mb-8 font-medium max-w-prose leading-[70px]">
            <span>
              A design{' '}
              <GiMonkeyWrench className="inline w-8 h-8 align-middle" />{' '}
              engineer with a love for{' '}
              <GiPush className="inline w-8 h-8 align-middle" /> pushing the{' '}
            </span>

            <span className="border border-[#333] p-4 mx-1 w-min">
              boundaries
            </span>
            <span>of what&apos;s possible</span>
          </em>
        </Stagger>

        <Stagger amount={0.5}>
          <p className="text-xl my-8 max-w-prose leading-relaxed md:text-lg">
            There&apos;s text here that you are probably never going to read.
            Why? Because it looks like a huge block of text, which doesn&apos;t
            really look that &quot;appetizing&quot; to read.
          </p>
        </Stagger>
        <Stagger amount={0.75}>
          <p className="text-xl max-w-prose leading-relaxed md:text-lg">
            Check out my projects below. If you find something that tickles your
            fancy, click on it!
          </p>
        </Stagger>
      </div>

      <ScrollerContainer scrollerData={SCROLLER_DATA} />
    </div>
  );
};

export default Index;
