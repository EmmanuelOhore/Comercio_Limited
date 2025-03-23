type companyProps = Record<string, string>;

const CompanyCards = ({ img, title, description }: companyProps) => {
  return (
    <div className="bg-white overflow-hidden shadow-[0px_10px_15px_#0B258580] w-[25%] rounded-xl  max-tablet:w-full">
      <img
        src={img}
        alt="placeoolde"
        className=" w-full h-[20rem] object-cover max-laptop:h-[13rem] max-phoneL:h-[8.5rem] "
      />

      <div className="flex flex-col justify-between   gap-1 p-3 max-tablet:p-4 max-phoneL:p-2">
        <h2 className="font-semibold text-lg max-laptop:text-base max-laptop:leading-5 max-phoneL:text-sm max-phoneL:text-center">
          {title}
        </h2>
        <h3 className="text-sm text-black/64 max-phoneL:text-xs max-phoneL:text-center">
          {description}
        </h3>
      </div>
    </div>
  );
};

export default CompanyCards;
