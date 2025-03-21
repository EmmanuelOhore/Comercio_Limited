const MissionVision = () => {
  return (
    <section className="  mx-auto flex flex-col gap-1  text-gray-800">
      <article className=" backgroundimgs   h-[60vh] flex items-center px-6 ">
        <div className="flex gap-4 ml-[5rem]  w-[50%] px-4 py-9 rounded-xl bg-white shadow-[0px_10px_20px_#0B258580]">
          <div className="w-1/2 flex flex-col gap-4">
            <h2 className="text-3xl font-bold border-b-2 self-start border-black/20 pb-1.5   ">
              Mision
            </h2>
            <p className="text-lg">
              Passionately creating value for our clients by delivering
              innovative solutions
            </p>
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <h2 className="text-3xl font-bold border-b-2 self-start border-black/20 pb-1.5   ">
              Vision
            </h2>
            <p className="text-lg">
              Our vision is to be the foremost IT solutions provider across the
              African continent by 2030
            </p>
          </div>
        </div>
      </article>
      <article className=" backgroundimgs  h-[60vh] flex items-center px-6 ">
        <div className="flex flex-col gap-4 mr-[5rem]  w-[40%] px-4 py-9 rounded-xl bg-white shadow-[0px_10px_20px_#0B258580] ml-auto">
          <h2 className="text-3xl font-bold mb-4">Core Values</h2>
          <ul className="list-disc pl-5 space-y-2 ">
            <li>Strong relationships</li>
            <li>Excellent customer service</li>
            <li>Innovative solutions</li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default MissionVision;
