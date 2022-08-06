import React from "react";

interface HandsPageProps {}

export const HandsPage: React.FC<HandsPageProps> = ({}) => {
  return (
    <>
      <Hand1 />
      <Hand2 />
      <Hand3 />
    </>
  );
};

const Hand1 = () => {
  return (
    <section className="relative grid h-[75vh] place-items-center lg:h-[120vh]">
      <img
        className="absolute left-1/2 max-w-[250px] -translate-x-1/2 sm:max-w-[300px] lg:right-16 lg:max-w-[400px] xl:max-w-[450px]"
        src="/img/hand1.png"
        alt="marble hand1"
      />
      <div className="relative top-24 left-7 flex flex-col items-end justify-center gap-y-3 sm:top-32 lg:left-10 lg:top-20 lg:flex-row lg:items-center lg:gap-y-0 lg:gap-x-48">
        <h2 className=" flex flex-col font-fogtwo">
          <span className="num-text self-end">01</span>
          <p className="text-5xl text-dark lg:text-7xl">Éclaté</p>
        </h2>

        <p className="whitespace-nowrap text-right text-sm leading-tight sm:text-base md:text-lg lg:text-left">
          Marble is a metamorphic rock composed
          <br />
          of recrystallized carbonate minerals,
          <br />
          most commonly calcite or dolomite.
        </p>
      </div>
    </section>
  );
};

const Hand2 = () => {
  return (
    <section className="relative grid h-[75vh] place-items-center lg:h-[120vh]">
      <img
        className="absolute left-1/2 max-w-[250px] -translate-x-1/2 sm:max-w-[300px] lg:right-16 lg:max-w-[400px] xl:max-w-[450px]"
        src="/img/hand2.png"
        alt="marble hand1"
      />
      <div className="relative top-28 flex flex-col-reverse justify-center gap-y-3 sm:top-36 lg:top-20 lg:right-28 lg:flex-row lg:items-center lg:gap-x-40 lg:gap-y-0">
        <p className="whitespace-nowrap text-left text-sm leading-tight  sm:text-base md:text-lg lg:text-right">
          Marble is a metamorphic rock composed
          <br />
          of recrystallized carbonate minerals,
          <br />
          most commonly calcite or dolomite.
        </p>

        <h2 className="flex flex-col font-fogtwo">
          <span className="num-text self-start">02</span>
          <p className="text-5xl text-dark lg:text-7xl">Fort</p>
        </h2>
      </div>
    </section>
  );
};

const Hand3 = () => {
  return (
    <section className="grid h-screen place-items-center overflow-hidden lg:h-[130vh]">
      <div className="relative left-5 flex  gap-5 sm:left-8 lg:left-20">
        <div className="space-y-2 lg:space-y-3">
          <img
            className="max-w-[250px] sm:max-w-[300px] lg:max-w-[400px] xl:max-w-[450px]"
            src="/img/hand3.jpg"
            alt="hand render"
          />
          <p className="whitespace-nowrap text-left text-sm leading-tight sm:text-base md:text-lg">
            Marble is a metamorphic rock composed
            <br />
            of recrystallized carbonate minerals,
            <br />
            most commonly calcite or dolomite.
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <h2 className=" flex flex-col font-fogtwo">
            <span className="num-text self-start">03</span>
            <p className="text-5xl text-dark lg:text-7xl">Void</p>
          </h2>
          <img
            className="relative bottom-20 right-1/3 max-w-[150px] sm:bottom-28 sm:max-w-[200px] md:bottom-36 lg:bottom-0 lg:max-w-[250px] xl:right-[40%] xl:max-w-[300px]"
            src="/img/head.jpg"
            alt="sinked head"
          />
        </div>
      </div>
    </section>
  );
};
