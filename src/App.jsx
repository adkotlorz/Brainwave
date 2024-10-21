import ButtonGradient from "./assets/svg/ButtonGradient";

import { Header, Hero, Features, Collaboration } from "./components";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Features />
        <Collaboration />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
