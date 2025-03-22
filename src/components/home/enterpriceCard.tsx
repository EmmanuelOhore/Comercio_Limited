import placeholder from "../../assets/images.png";

const EnterPriceCard = () => {
  return (
    <article className=" bg-white shadow-[5px_5px_20px_#0B258580] flex rounded-lg flex-col !h-auto  gap-4 p-4 w-[30.33%] hover:-translate-y-[2rem] origin-top  transition-all duration-300 max-tablet:w-full  max-tablet:px-2 max-phoneL:px-4 max-phoneP:px-2">
      <div className="w-[5rem] ">
        <img
          src={placeholder}
          className="w-full h-full"
          alt="placeholdericon"
        />
      </div>
      <div className="flex gap-4 flex-col max-tablet:gap-2">
        <h2 className="text-2xl font-semibold text-black max-laptop:text-xl max-tablet:text-lg max-tablet:font-semibold max-phoneP:text-base">
          Information Systems Protection
        </h2>
        <p className="text-black/60 text-base max-laptop:text-[15px]   max-tablet:text-sm max-phoneP:text-xs">
          Safeguard your organization's critical assets and ensure enhanced and
          complete protection.
        </p>
      </div>
    </article>
  );
};

export default EnterPriceCard;
