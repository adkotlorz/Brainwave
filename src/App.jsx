import ButtonGradient from "./assets/svg/ButtonGradient";

import { Header, Hero, Features } from "./components";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Features />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
