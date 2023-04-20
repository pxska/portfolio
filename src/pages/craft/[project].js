import React from 'react';
import Container from '@components/Container';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Intro from '@components/Craft/intro';
import Service from '@components/Craft/service';
import Tangible from '@components/Craft/tangible';
import Emotional from '@components/Craft/emotional';

const Project = () => {
  const {
    query: {title, color, project},
  } = useRouter();

  console.log(project);

  return (
    <Container>
      <h1
        className="text-8xl mb-8 uppercase font-semibold md:text-4xl"
        style={{color}}>
        {title}
      </h1>
      <Link href="/">Go back home</Link>
      <div className="mt-8">
        {project === 'intro' ? (
          <Intro />
        ) : project === 'service' ? (
          <Service />
        ) : project === 'tangible' ? (
          <Tangible />
        ) : (
          <Emotional />
        )}
      </div>
    </Container>
  );
};

export default Project;
