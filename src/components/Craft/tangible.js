import Image from 'next/image';
import React from 'react';

import firstImage from '../../assets/images/IMG_2241.jpg';
import secondImage from '../../assets/images/IMG_2247.jpg';
import thirdImage from '../../assets/images/IMG_2693.jpg';

const Tangible = () => {
  return (
    <div className="flex gap-8 overflow-x-auto">
      <div className="max-w-[250px]">
        <p className="text-xl">
          Introducing Playser – a musical device that is going to change the way
          people explore their creativity through music.
        </p>
      </div>
      <div className="flex gap-4">
        <Image
          src={firstImage}
          className="float-left"
          alt="Lasers pointing at a piece of paper do designate the notes"
          height={500}
        />
        <Image
          src={secondImage}
          className="float-left"
          alt="Sketching out how to place the lasers"
          height={500}
        />
        <Image
          src={thirdImage}
          className="float-left"
          alt="Coloring the prototype orange"
          height={500}
        />
      </div>
    </div>
  );
};

export default Tangible;
