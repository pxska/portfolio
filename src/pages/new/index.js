import React from 'react';

import ScrollerContainer from '@/components/Scroller/ScrollerContainer';

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
    <div>
      <div className="m-8 max-w-prose">
        <h1 className="font-semibold text-6xl mb-8">Kristjan Poska</h1>
        <em className="text-2xl">
          A design engineer with a love of pushing the boundaries of what&apos;s
          possible
        </em>
        <p className="text-2xl mt-16 leading-relaxed">
          I pay meticulous attention to detail in every aspect of my work,
          ensuring that the final product is visually flawless and perfectly
          aligned. My dedication speaks to my commitment to delivering
          high-quality results that meet and exceed client expectations.
        </p>
        <p className="text-2xl py-16 leading-relaxed">
          Check out my projects below. If you find something that tickles your
          fancy, click on it!
        </p>
      </div>
      <ScrollerContainer scrollerData={SCROLLER_DATA} />
    </div>
  );
};

export default Index;
