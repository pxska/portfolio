import React from 'react';

import Image from 'next/image';

import imageSrc from '../../assets/images/IMG_7073.jpg';

const Intro = () => {
  return (
    <div>
      <Image src={imageSrc} />
    </div>
  );
};

export default Intro;
