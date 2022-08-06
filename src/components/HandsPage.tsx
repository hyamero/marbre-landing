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
    <section className="relative grid h-[120vh] place-items-center">
      <img
        className="absolute left-1/2 max-w-[250px] -translate-x-1/2 sm:max-w-[300px] lg:right-16 lg:max-w-[400px] xl:max-w-[450px]"
        src="/img/hand1.png"
        alt="marble hand1"
      />
      <div className="relative top-20 left-10 flex items-center justify-center gap-x-48">
        <h2 className=" flex flex-col font-fogtwo">
          <span className="self-end text-9xl text-gold">01</span>
          <p className="text-7xl text-dark">Éclaté</p>
        </h2>

        <p className="whitespace-nowrap text-sm leading-tight sm:text-base md:text-lg">
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
    <section className="relative grid h-[120vh] place-items-center">
      <img
        className="absolute left-1/2 max-w-[250px] -translate-x-1/2 sm:max-w-[300px] lg:right-16 lg:max-w-[400px] xl:max-w-[450px]"
        src="/img/hand2.png"
        alt="marble hand1"
      />
      <div className="relative right-28 top-20 flex items-center justify-center gap-x-40">
        <p className="whitespace-nowrap text-right text-sm leading-tight sm:text-base md:text-lg">
          Marble is a metamorphic rock composed
          <br />
          of recrystallized carbonate minerals,
          <br />
          most commonly calcite or dolomite.
        </p>

        <h2 className=" flex flex-col font-fogtwo">
          <span className="self-start text-9xl text-gold">02</span>
          <p className="text-7xl text-dark">Fort</p>
        </h2>
      </div>
    </section>
  );
};

const Hand3 = () => {
  return (
    <section className="grid h-[130vh]  place-items-center">
      <div className="relative left-20 flex gap-5">
        <div>
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
            <span className="self-start text-9xl text-gold">03</span>
            <p className="text-7xl text-dark">Void</p>
          </h2>
          <img
            className="relative right-[40%] max-w-[150px] sm:max-w-[200px] lg:max-w-[250px] xl:max-w-[300px]"
            src="/img/head.jpg"
            alt="sinked head"
          />
        </div>
      </div>
    </section>
  );
};
