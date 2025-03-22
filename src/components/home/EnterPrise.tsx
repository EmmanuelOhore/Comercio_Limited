import EnterPriceCard from "./enterpriceCard";

const EnterpriceSection = () => {
  return (
    <section className=" bg-black/10   py-[5rem]  justify-center  flex max-laptop:py-[4rem] max-tablet:py-[3.5rem]  max-phoneL:py-[2rem]  ">
      <div className=" w-[90%] p-4    flex flex-col items-center top-[-1.5rem]  gap-18 max-laptop:gap-10 max-tablet:w-full max-phoneL:gap-8">
        <header className="flex flex-col  items-center gap-4 max-laptop:gap-2 max-tablet:gap- max-phoneL:gap-2 max-phoneP:gap-1">
          <h3 className="text-lg font-light max-tablet:text-base max-phoneL:text-sm max-phoneP:text-xs ">
            Enterprises move to Comercio Limited for
          </h3>
          <h2 className="text-4xl font-medium text-black max-tablet:text-3xl max-phoneL:text-2xl max-phoneL:text-center max-phoneP:text-xl max-phoneP:font-semibold">
            World class security and optimization
          </h2>
        </header>

        <div className="flex justify-between max-tablet:gap-4 max-phoneL:grid max-phoneL:grid-cols-1 max-phoneL:px-1">
          <EnterPriceCard />
          <EnterPriceCard />
          <EnterPriceCard />
        </div>
      </div>
    </section>
  );
};

export default EnterpriceSection;
