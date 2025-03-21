import placeholder from "../../assets/images.png";

const EnterPriceCard = () => {
  return (
    <article className=" bg-white shadow-[5px_5px_20px_#0B258580] flex rounded-lg flex-col !h-auto  gap-4 p-4 w-[30.33%] hover:-translate-y-[2rem] origin-top  transition-all duration-300">
      <div className="w-[5rem]">
        <img
          src={placeholder}
          className="w-full h-full"
          alt="placeholdericon"
        />
      </div>
      <div className="flex gap-4 flex-col">
        <h2 className="text-2xl font-semibold text-black">
          Information Systems Protection
        </h2>
        <p className="text-black/60 text-base ">
          Safeguard your organization's critical assets and ensure enhanced and
          complete protection.
        </p>
      </div>
    </article>
  );
};

export default EnterPriceCard;
