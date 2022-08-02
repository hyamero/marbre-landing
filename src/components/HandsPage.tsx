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
    <section className="flex h-screen items-center justify-center bg-red-500">
      <h2 className=" flex flex-col font-fogtwo">
        <span className="self-end text-9xl text-gold">01</span>
        <p className="text-7xl text-dark">éclaté</p>
      </h2>
      <img
        className="relative max-w-[250px] rounded-full sm:max-w-[300px] lg:right-16 lg:max-w-[400px] xl:max-w-[450px]"
        src="/img/hand1.png"
        alt="marble hand1"
      />
      <p className="whitespace-nowrap text-sm leading-tight sm:text-base md:text-lg">
        Marble is a metamorphic rock composed
        <br />
        of recrystallized carbonate minerals,
        <br />
        most commonly calcite or dolomite.
      </p>
    </section>
  );
};
const Hand2 = () => {
  return (
    <section className="h-screen bg-green-500">
      <h2>
        01
        <p>fort</p>
      </h2>
      <img
        className="relative max-w-[250px] rounded-full sm:max-w-[300px] lg:right-16 lg:max-w-[400px] xl:max-w-[450px]"
        src="/img/hand2.png"
        alt="marble hand1"
      />
      <p className="whitespace-nowrap text-sm leading-tight sm:text-base md:text-lg">
        Marble is a metamorphic rock composed
        <br />
        of recrystallized carbonate minerals,
        <br />
        most commonly calcite or dolomite.
      </p>
    </section>
  );
};
const Hand3 = () => {
  return (
    <section className="h-screen bg-blue-500">
      <div>ladkjsf</div>
    </section>
  );
};
