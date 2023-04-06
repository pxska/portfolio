import React from 'react';

import ScrollerContainer from '@/components/Scroller/ScrollerContainer';

const SCROLLER_DATA = [
  'Meet Phõõn ~ a vent space',
  'This is some very much so longer text.',
  'This is some very much so longer text.',
];

const Index = () => {
  return (
    <div>
      <p>hi, i&apos;m kristjan</p>
      <ScrollerContainer scrollerData={SCROLLER_DATA} />
    </div>
  );
};

export default Index;
