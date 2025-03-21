import EnterPriceCard from "./enterpriceCard";

const EnterpriceSection = () => {
  return (
    <section className=" bg-black/10   py-[5rem]  justify-center  flex   ">
      <div className=" w-[90%] p-4    flex flex-col items-center top-[-1.5rem]  gap-18 ">
        <header className="flex flex-col  items-center gap-4">
          <h3 className="text-lg font-light ">
            Enterprises move to Comercio Limited for
          </h3>
          <h2 className="text-4xl font-medium text-black">
            World class security and optimization
          </h2>
        </header>

        <div className="flex justify-between">
          <EnterPriceCard />
          <EnterPriceCard />
          <EnterPriceCard />
        </div>
      </div>
    </section>
  );
};

export default EnterpriceSection;
