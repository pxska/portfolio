import Stagger from '@components/Stagger';

export const INITIAL_STAGGER_AMOUNT = 0.15;
export const STAGGER_ADD = 0.15;

function Intro() {
  return (
    <div className="max-w-prose m-auto flex">
      <div className="w-full">
        <div className="mb-8">
          <Stagger amount={INITIAL_STAGGER_AMOUNT}>
            <h1 className="font-bold">Kristjan Poska</h1>
          </Stagger>

          <Stagger amount={INITIAL_STAGGER_AMOUNT + STAGGER_ADD}>
            <em>
              A design engineer with a love of pushing the boundaries of
              what&apos;s possible
            </em>
          </Stagger>
        </div>

        <Stagger amount={INITIAL_STAGGER_AMOUNT + STAGGER_ADD * 2}>
          <p className="mb-8">
            I pay meticulous attention to detail in every aspect of my work,
            ensuring that the final product is visually flawless and perfectly
            aligned. My dedication speaks to my commitment to delivering
            high-quality results that meet and exceed client expectations.
          </p>
        </Stagger>
      </div>
    </div>
  );
}

export default Intro;
