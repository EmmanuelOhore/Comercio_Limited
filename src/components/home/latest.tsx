import LatestCard from "./lastesCard";
const LatestSection = () => {
  return (
    <section className="flex  justify-center py-[3rem] ">
      <div className=" w-[90%] flex flex-col gap-10">
        <h2 className="text-4xl font-semibold ">Latest from Comercio</h2>
        <article className="flex justify-between">
          <LatestCard />
          <LatestCard />
          <LatestCard />
        </article>
      </div>
    </section>
  );
};

export default LatestSection;
