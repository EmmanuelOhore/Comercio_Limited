import placehold from "../../assets/placeholder.png";

const LatestCard = () => {
  return (
    <div className=" w-[30%] flex overflow-hidden rounded-lg  flex-col gap-4">
      <header className="h-[18rem]">
        <img
          src={placehold}
          alt="placeholder"
          className="w-full h-full object-cover"
        />
      </header>
      <div className="flex flex-col gap-6 p-2">
        <h2 className="text-xl font-normal text-black/70">
          Comercio Limited Announces Strategic Partnership with Waterfall
          Security to Enhance OT Cybersecurity in Africa
        </h2>
        <button className="text-lg self-start font-normal text-black/50">
          Read More
        </button>
      </div>
    </div>
  );
};

export default LatestCard;
