import {useRouter} from 'next/router';

import Contact from '@components/Contact';
import Craft from '@/components/Craft';
import Intro from '@components/Intro';
import Separator from '@components/Separator';
import Stagger from '@components/Stagger';
import Container from '@/components/Container';

export default function Index() {
  const {query} = useRouter();

  const shouldAnimate = query.from !== 'craft';

  return (
    <Container shouldAnimate={shouldAnimate}>
      <Intro />

      <Separator />

      <Stagger amount={1.25}>
        <Craft />
      </Stagger>

      <Separator />

      <Stagger amount={1.5}>
        <Contact />
      </Stagger>
    </Container>
  );
}
