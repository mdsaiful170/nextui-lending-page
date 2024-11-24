import Header from "./assets/component/Header";
import Hero from "./assets/component/Hero";
import Vision from "./assets/component/Vision";

function App() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Header />
        <div className="w-full space-y-[120px] max-w-[1440px] px-2.5 md:px-10 lg:px-20 xl:px-24 mx-auto">
          <Hero />
          <Vision />
        </div>
      </main>
    </>
  );
}

export default App;
