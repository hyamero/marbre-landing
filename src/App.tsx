function App() {
  return (
    <div className="m-auto h-screen md:w-3/4">
      <div className="flex h-full flex-col items-center justify-center gap-10 bg-white  px-14 sm:px-0 md:gap-5 lg:flex-row">
        <div className="relative z-[1] text-center lg:left-16 lg:text-left">
          <h1 className="flex font-fogtwo text-6xl sm:text-7xl md:text-8xl lg:flex-col lg:text-9xl xl:text-[10rem] xl:leading-[0.9] ">
            <span className="text-dark ">Marbre</span>
            <span className=" text-gold">doré</span>
          </h1>
          <p className="whitespace-nowrap text-sm leading-tight sm:text-base md:text-lg">
            Marble is a metamorphic rock composed
            <br />
            of recrystallized carbonate minerals,
            <br />
            most commonly calcite or dolomite.
          </p>
        </div>
        <img
          className="relative max-w-[250px] rounded-full sm:max-w-[300px] lg:right-16 lg:max-w-[400px] xl:max-w-[450px]"
          src="/img/statue.jpg"
          alt="marble statue"
        />
      </div>
    </div>
  );
}

export default App;
