import placeholder from "../../assets/placeholder.png";

const WhoCards = () => {
  return (
    <div className="flex flex-col items-center    gap-4 max-phoneL:gap-2 max-phoneP:w-[90%] max-phoneL:mx-auto max-phoneL:shadow-[0px_5px_20px_#0B258580] max-phoneL:py-4 max-phoneL:px-2 max-phoneL:rounded-lg">
      <header className="w-[10rem] max-phoneL:w-full max-phoneL:shadow-[0px_2px_10px_#0B258580]">
        <img src={placeholder} alt="placeholder" />
      </header>
      <div className="flex items-center gap-1 flex-col">
        <h3 className="text-2xl font-bold text-[#202329] max-laptop:text-xl max-tablet:text-lg">
          Websites
        </h3>
        <p className="text-center w-[80%] text-sm  font-normal text-[#98A6BF]  max-laptop:w-full max-tablet:text-[13px] max-phoneL:text-[12px] ">
          We build professional responsive websites optimized for the most
          popular search engines.
        </p>
      </div>
    </div>
  );
};

export default WhoCards;
