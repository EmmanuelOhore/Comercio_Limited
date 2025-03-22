import placehold from "../../assets/placeholder.png";

const LatestCard = () => {
  return (
    <div className=" w-[30%] flex overflow-hidden rounded-lg  flex-col gap-4 max-laptop:w-[31%] max-tablet:w-full max-phoneL:gap-2">
      <header className="h-[18rem]  max-laptop:h-[15rem] max-tablet:h-[12rem] max-phoneP:h-[10rem]">
        <img
          src={placehold}
          alt="placeholder"
          className="w-full h-full object-cover"
        />
      </header>
      <div className="flex flex-col gap-6 p-2">
        <h2 className="text-xl font-normal text-black/70 max-laptop:text-[17px] max-tablet:text-base max-phoneP:text-sm max-phoneP:leading-[1.1rem]">
          Comercio Limited Announces Strategic Partnership with Waterfall
          Security to Enhance OT Cybersecurity in Africa
        </h2>
        <button className="text-lg self-start font-normal text-black/50 max-laptop:text-base max-tablet:text-sm">
          Read More
          <i className="fa-solid ml-2 text-xs fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default LatestCard;
