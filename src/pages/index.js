import Contact from '@components/Contact';
import Work from '@components/Work';
import Intro from '@components/Intro';
import Separator from '@components/Separator';
import Stagger from '@components/Stagger';

export default function Index() {
  return (
    <div className="max-w-3xl m-auto mt-32 mb-32 px-8">
      <Intro />

      <Separator />

      <Stagger amount={1.25}>
        <Work />
      </Stagger>

      <Separator />

      <Stagger amount={1.5}>
        <Contact />
      </Stagger>
    </div>
  );
}
