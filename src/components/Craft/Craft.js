import styles from './Craft.module.scss';

function Craft() {
  return (
    <div className="max-w-prose m-auto">
      <p className="mb-16">
        Behold, witness my latest endeavors! I guarantee a soul-stirring
        experience awaits you. And should you not find satisfaction, present to
        me a challenge worthy of my skills.
      </p>

      <div className={styles.cards}>
        {/* <Card
          title="Phõõn"
          description="Phõõn is a way to vent your spleen."
          link="/craft/phoon"
        />
        <Card title="Give me back my money!" link="/craft/invl" />
        <Card title="From" link="/craft/emotional" /> */}
      </div>
    </div>
  );
}

export default Craft;
