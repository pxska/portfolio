import React from 'react';

import ScrollerContainer from '@/components/Scroller/ScrollerContainer';
import Stagger from '@/components/Stagger';

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
    <div data-animate className="h-screen">
      <div className="pt-8 px-8 max-w-prose">
        <h1 className="font-semibold text-6xl mb-8">Kristjan Poska</h1>

        <Stagger amount={0.25}>
          <em className="text-2xl">
            A design engineer with a love of pushing the boundaries of
            what&apos;s possible
          </em>
        </Stagger>
        <Stagger amount={0.5}>
          <p className="text-2xl my-16 leading-relaxed">
            I pay meticulous attention to detail in every aspect of my work,
            ensuring that the final product is visually flawless and perfectly
            aligned. My dedication speaks to my commitment to delivering
            high-quality results that meet and exceed client expectations.
          </p>
        </Stagger>
        <Stagger amount={0.75}>
          <p className="text-2xl leading-relaxed">
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
