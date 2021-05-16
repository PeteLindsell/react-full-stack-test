import Section from "./../layout/section";
import Hero from "./../components/hero";

const dummyText = `Space Exploration Technologies Corp. is an American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars.`;

const Home = () => (
  <Section>
    <Hero text={dummyText} title="SpaceX" />
  </Section>
);

export default Home;
