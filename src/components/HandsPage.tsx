import HandScrollAnimation from "./gsap/HandScrollAnimation";

export const HandsPage = () => {
  return (
    <HandScrollAnimation>
      <Hand1 />
      <Hand2 />
      <Hand3 />
    </HandScrollAnimation>
  );
};

const Hand1 = () => {
  return (
    <section className="sec1 relative grid h-[75vh] place-items-center lg:h-[120vh]">
      <img
        className="clip-0-top hand1 absolute bottom-6 left-1/2 max-w-[250px] -translate-x-1/2 opacity-0 sm:max-w-[300px] lg:bottom-44 lg:right-16 lg:z-[1] lg:max-w-[400px] xl:max-w-[450px]"
        src="/img/hand1.png"
        alt="marble hand1"
      />
      <div className="relative top-24 left-7 flex flex-col items-end justify-center gap-y-3 sm:top-32 lg:left-10 lg:top-20 lg:flex-row lg:items-center lg:gap-y-0 lg:gap-x-48">
        <h2 className="flex flex-col font-fogtwo">
          <span className="sec1-num num-text self-end">01</span>
          <p className="sec1-title toWhite text-5xl text-dark lg:text-7xl">
            Éclaté
          </p>
        </h2>

        <p className="toWhite whitespace-nowrap text-right text-sm leading-tight sm:text-base md:text-lg lg:text-left">
          <span className="sec1-p-stagger">
            Marble is a metamorphic rock composed
          </span>
          <br />
          <span className="sec1-p-stagger">
            of recrystallized carbonate minerals,
          </span>
          <br />
          <span className="sec1-p-stagger">
            most commonly calcite or dolomite.
          </span>{" "}
        </p>
      </div>
    </section>
  );
};

const Hand2 = () => {
  return (
    <section className="sec2 relative grid h-[75vh] place-items-center lg:h-[120vh]">
      <img
        className="clip-0-top hand2 absolute bottom-4 left-1/2 max-w-[250px] -translate-x-1/2 opacity-0 sm:max-w-[300px] lg:bottom-44 lg:right-16 lg:z-[1] lg:max-w-[400px] xl:max-w-[450px]"
        src="/img/hand2.png"
        alt="marble hand1"
      />
      <div className="relative top-28 flex flex-col-reverse justify-center gap-y-3 sm:top-36 lg:top-20 lg:right-28 lg:flex-row lg:items-center lg:gap-x-40 lg:gap-y-0">
        <p className="whitespace-nowrap text-left text-sm leading-tight  sm:text-base md:text-lg lg:text-right">
          <span className="sec2-p-stagger">
            Marble is a metamorphic rock composed
          </span>
          <br />
          <span className="sec2-p-stagger">
            of recrystallized carbonate minerals,
          </span>
          <br />
          <span className="sec2-p-stagger">
            most commonly calcite or dolomite.
          </span>{" "}
        </p>

        <h2 className="flex flex-col font-fogtwo">
          <span className="sec2-num num-text self-start">02</span>
          <p className="sec2-title text-5xl text-dark lg:text-7xl">Fort</p>
        </h2>
      </div>
    </section>
  );
};

const Hand3 = () => {
  return (
    <section
      id="sec3"
      className="grid h-screen place-items-center overflow-hidden lg:h-[130vh]"
    >
      <div className="relative left-5 flex  gap-5 sm:left-8 lg:left-20">
        <div className="space-y-2 lg:space-y-3">
          <img
            id="hand3"
            className="clip-0-top relative left-16 max-w-[250px]  opacity-0 sm:left-14 sm:max-w-[300px] lg:left-0 lg:max-w-[400px] xl:max-w-[450px]"
            src="/img/hand3.jpg"
            alt="hand render"
          />
          <p
            id="sec3-p-stagger"
            className="relative whitespace-nowrap text-left text-sm leading-tight sm:text-base md:text-lg lg:right-14"
          >
            Marble is a metamorphic rock composed
            <br />
            of recrystallized carbonate minerals,
            <br />
            most commonly calcite or dolomite.
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <h2 className=" flex flex-col font-fogtwo">
            <span id="sec3-num" className="num-text self-start">
              03
            </span>
            <p id="sec3-title" className="text-5xl text-dark lg:text-7xl">
              Void
            </p>
          </h2>
          <img
            id="hand3-head"
            className="clip-0-top relative -bottom-14 right-1/3 max-w-[150px] sm:-bottom-10 sm:max-w-[200px] lg:right-[40%] lg:max-w-[250px] xl:max-w-[300px]"
            src="/img/head.jpg"
            alt="sinked head"
          />
        </div>
      </div>
    </section>
  );
};
