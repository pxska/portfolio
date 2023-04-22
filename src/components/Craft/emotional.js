import React from 'react';
import Image from 'next/image';

import imageSrc from '../../assets/images/mockup.jpeg';

const Emotional = () => {
  return (
    <div>
      <Image src={imageSrc} alt="emodesign" />
    </div>
  );
};

export default Emotional;
