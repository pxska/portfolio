import Contact from '@components/Contact';
import Craft from '@/components/Craft';
import Intro from '@components/Intro';
import Separator from '@components/Separator';
import Stagger from '@components/Stagger';
import Container from '@/components/Container';

export default function Index() {
  return (
    <Container>
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
