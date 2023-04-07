import {useRouter} from 'next/router';

import Contact from '@/components/Contact';
import Craft from '@/components/Craft/Craft';
import Intro from '@components/Intro';
import Separator from '@components/Separator';
import Stagger from '@components/Stagger';
import Container from '@/components/Container';

import {INITIAL_STAGGER_AMOUNT, STAGGER_ADD} from '@components/Intro';

export default function Index() {
  const {query} = useRouter();

  const shouldAnimate = query.from !== 'craft';

  return (
    <Container shouldAnimate={shouldAnimate}>
      <Intro />

      <Separator />

      <Stagger amount={INITIAL_STAGGER_AMOUNT + STAGGER_ADD * 3}>
        <Craft />
      </Stagger>

      <Separator />

      <Stagger amount={INITIAL_STAGGER_AMOUNT + STAGGER_ADD * 4}>
        <Contact />
      </Stagger>
    </Container>
  );
}
