import Image from 'next/image';
import React from 'react';

import firstImage from '../../assets/images/IMG_2241.jpg';
import secondImage from '../../assets/images/IMG_2247.jpg';
import thirdImage from '../../assets/images/IMG_2693.jpg';

const Tangible = () => {
  return (
    <div className="flex gap-8">
      <div className="w-1/2">
        <p className="pb-4">
          Introducing Playser, the revolutionary musical device that is changing
          the way people explore their creativity through music! Playser is
          designed to meet the needs of modern-day living, offering a compact
          and versatile way to explore your musical creativity. With the ability
          to connect to your computer via Bluetooth, Playser allows you to
          unleash your inner musician by playing eight different notes based on
          MIDI outputs with a simple touch of its eight built-in lasers.
        </p>

        <p className="pb-4">
          The concept behind Playser is that our hands will be the future remote
          controller to play music. It flirts with the idea that technologies
          will be embedded within us, whether it be through gestures or
          thoughts, resulting in a whole wave of new input modalities that will
          make it easier and easier to use future technologies.
        </p>

        <p className="pb-4">
          During the design process, the team struggled to brainstorm an idea
          that would fit the theme of &quot;Smart Art.&quot; After exploring
          various ideas, they came up with the initial concept of Playser, which
          was designed to fit on a table and not feel like a toy. The final
          prototype could play an octave from C4 to C5 and featured small ramps
          in front of each laser, making it accessible to individuals with
          visual impairments.
        </p>

        <p className="pb-4">
          The building process was divided into different tasks, such as
          electronics, laser cutting, and designing. Through this process, the
          team learned to design prototypes in Adobe Illustrator, laser cut them
          with precision, plan out each component of the electronics, and
          consider the final appearance of the product.
        </p>

        <p className="pb-4">
          Lastly, while AI provided valuable creative insights during the design
          process, the team discovered that when given prompts that required
          truly imaginative ideas, AI falls somewhat short. Although AI did
          offer significant inspiration, it was not able to understand the
          team&apos;s concept through the prompts provided.
        </p>

        <p className="pb-4">
          In conclusion, Playser is a device that offers a new way to explore
          your musical creativity while meeting the needs of modern-day living.
          It is designed to be visually appealing, user-friendly, and accessible
          to individuals with visual impairments. The team&apos;s building
          process taught them to appreciate each other&apos;s unique skills and
          how to work through their differences to create a successful
          prototype.
        </p>
      </div>
      <div className="w-1/2 flex flex-col gap-4">
        <Image
          src={firstImage}
          className="float-left"
          alt="Lasers pointing at a piece of paper do designate the notes"
        />
        <Image
          src={secondImage}
          className="float-left"
          alt="Sketching out how to place the lasers"
        />
        <Image
          src={thirdImage}
          className="float-left"
          alt="Coloring the prototype orange"
        />
      </div>
    </div>
  );
};

export default Tangible;
