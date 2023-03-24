import Contact from '@components/Contact';
import Craft from '@/components/Craft';
import Intro from '@components/Intro';
import Separator from '@components/Separator';
import Stagger from '@components/Stagger';

export default function Index() {
  return (
    <div className="max-w-prose m-auto mt-32 mb-32 px-8">
      <Intro />

      <Separator />

      <Stagger amount={1.25}>
        <Craft />
      </Stagger>

      <Separator />

      <Stagger amount={1.5}>
        <Contact />
      </Stagger>
    </div>
  );
}
