const HeroSection = () => {
  return (
    <div className="p-2 sm:p-4 flex flex-col items-start sm:items-center justify-end mt-6 sm:mt-12 md:mt-20 lg:mt-36 xl:mt-[20svw]  px-2 md:px-4 sm:mb-24">
      <h1 className="tracking-tighter text-4xl lg:text-6xl xl:text-8xl font-black">
        Styled Github Graph
      </h1>
      <span className="text-start sm:text-center text-base lg:text-lg text-foreground-secondary max-w-[400px] lg:max-w-[500px]">
        A server-ready Typescript / React component to display your GitHub
        activity with a sleek, customizable design!
      </span>
    </div>
  );
};

export default HeroSection;
