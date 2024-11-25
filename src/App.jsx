import DevitCard from "./assets/component/DevitCard";
import Header from "./assets/component/Header";
import Hero from "./assets/component/Hero";
import Offer from "./assets/component/Offer";
import Vision from "./assets/component/Vision";

function App() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Header />
        <div className="w-full md:space-y-[90px] space-y-[70px] lg:space-y-[120px] max-w-[1440px] px-2.5 md:px-10 lg:px-20 xl:px-24 mx-auto">
          <Hero />
          <Vision />
          <Offer />
          <DevitCard />
        </div>
      </main>
    </>
  );
}

export default App;
