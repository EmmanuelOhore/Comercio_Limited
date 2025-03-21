import placeholder from "../../assets/placeholder.png";

const WhoCards = () => {
  return (
    <div className="flex flex-col items-center  gap-4">
      <header className="w-[10rem]">
        <img src={placeholder} alt="placeholder" />
      </header>
      <div className="flex items-center gap-1 flex-col">
        <h3 className="text-2xl font-bold text-[#202329]">Websites</h3>
        <p className="text-center w-[80%] text-sm  font-normal text-[#98A6BF]">
          We build professional responsive websites optimized for the most
          popular search engines.
        </p>
      </div>
    </div>
  );
};

export default WhoCards;
