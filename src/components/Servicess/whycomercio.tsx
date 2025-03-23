import placeholder from "../../assets/placeholder.png";
import WhoCards from "./whoCards";
const WhyComercio = () => {
  return (
    <section className="flex justify-center my-[5rem] max-phoneL:my-[3rem] max-phoneP:my-[2.5rem]">
      <div className="w-[90%] flex flex-col items-center gap-16 max-tablet:w-full max-tablet:px-4 max-phoneL:px-1 max-phoneL:gap-10 max-phoneP:gap-6">
        <header className="flex flex-col items-center gap-2">
          <h2 className="text-4xl font-bold text-[#202329] max-tablet:text-3xl max-phoneL:text-2xl max-phoneP:text-xl">
            Why Comercio
          </h2>
          <h3 className="text-base text-[#98A6BF] font-normal max-laptop:w-full max-tablet:text-[15px] max-phoneL:text-center max-phoneL:text-sm max-phoneP:text-xs">
            The Imaginary great way of serving clients of different classs.
          </h3>
        </header>

        <article className="flex flex-row-reverse h-[60vh] gap-6 max-tablet:flex-col max-tablet:h-auto ">
          <div className="  w-[40%] max-tablet:w-full max-tablet:h-[15rem] max-phoneL:h-[13rem] max-phoneP:h-[10rem]">
            <img
              src={placeholder}
              alt="placholderimg "
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-6 max-phoneL:grid-cols-2 max-phoneP:grid-cols-1">
            <WhoCards />
            <WhoCards />
            <WhoCards />
            <WhoCards />
          </div>
        </article>
      </div>
    </section>
  );
};

export default WhyComercio;
