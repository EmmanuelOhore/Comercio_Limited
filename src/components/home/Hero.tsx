// import placeholder from "../../assets/placeholder.png";
const HeroSection = () => {
  return (
    <section className="h-[85vh] bg-black/20  flex items-center !bg-no-repeat !bg-cover !bg-center">
      <div className="ml-[15rem] flex gap-4 flex-col">
        <h2 className="text-xl font-medium ">What we do </h2>
        <h3 className="text-5xl font-semibold w-[70%] ">
          Comercio achives fortnigth expert parrtnership{" "}
        </h3>
        <div className="mt-4">
          <button className="text-lg font-light rounded-lg bg-[#0B2585] text-white   py-3 px-8">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
