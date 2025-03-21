type companyProps = Record<string, string>;

const CompanyCards = ({ img, title, description }: companyProps) => {
  return (
    <div className="bg-white overflow-hidden shadow-[0px_10px_15px_#0B258580] w-[25%] rounded-xl ">
      <img
        src={img}
        alt="placeoolde"
        className=" w-full h-[20rem] object-cover"
      />

      <div className="flex flex-col gap-1 p-3">
        <h2 className="font-semibold text-lg">{title}</h2>
        <h3 className="text-sm text-[#B4BAC7]">{description}</h3>
      </div>
    </div>
  );
};

export default CompanyCards;
