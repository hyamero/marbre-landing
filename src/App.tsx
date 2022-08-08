import { Footer } from "./components/Footer";
import { Loader } from "./components/gsap/Loader";
import { HandsPage } from "./components/HandsPage";
import { Navbar, Socials } from "./components/Navbar";

function App() {
  return (
    <div className="h-full">
      <Loader />
      <Navbar />
      <div className="m-auto md:w-3/4">
        <section className="flex h-screen flex-col items-center justify-center gap-10 px-14 sm:px-0 md:gap-5 lg:flex-row">
          <div className="relative z-[1] text-center lg:left-16 lg:text-left">
            <h1 className="flex font-fogtwo text-6xl sm:text-7xl md:text-8xl lg:flex-col lg:text-9xl xl:text-[10rem] xl:leading-[0.9] ">
              <span className="h1-anim text-dark ">Marbre</span>
              <span className=" h1-anim text-gold">doré</span>
            </h1>
            <p className="whitespace-nowrap text-sm leading-tight sm:text-base md:text-lg">
              <span className="p-stagger">
                Marble is a metamorphic rock composed
              </span>
              <br />
              <span className="p-stagger">
                of recrystallized carbonate minerals,
              </span>
              <br />
              <span className="p-stagger">
                most commonly calcite or dolomite.
              </span>
            </p>
          </div>
          <img
            className="head-img relative max-w-[250px] rounded-full sm:max-w-[300px] lg:right-16 lg:max-w-[400px] xl:max-w-[450px]"
            src="/img/statue.jpg"
            alt="marble statue"
          />
        </section>
        <HandsPage />
      </div>
      <Footer />
      <Socials />
    </div>
  );
}

export default App;
