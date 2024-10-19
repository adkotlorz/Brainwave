import Heading from "./design/Heading";
import Section from "./design/Section";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter. Not Harder with Brainwave."
        />
      </div>
    </Section>
  );
};

export default Benefits;
