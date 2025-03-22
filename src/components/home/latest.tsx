import LatestCard from "./lastesCard";
const LatestSection = () => {
  return (
    <section className="flex  justify-center py-[3rem] max-phoneL:py-[2rem] ">
      <div className=" w-[90%] flex flex-col gap-10 max-tablet:w-full max-tablet:p-4 max-phoneL:gap-5">
        <h2 className="text-4xl font-semibold max-laptop:text-3xl max-phoneL:text-2xl ">
          Latest from Comercio
        </h2>
        <article className="flex  justify-between  max-tablet:gap-4 max-phoneL:flex-wrap">
          <LatestCard />
          <LatestCard />
          <LatestCard />
        </article>
      </div>
    </section>
  );
};

export default LatestSection;
