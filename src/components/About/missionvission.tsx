const MissionVision = () => {
  return (
    <section className="  mx-auto flex flex-col gap-1  text-gray-800">
      <article className=" backgroundimgs   h-[60vh] flex items-center px-6 max-phoneL:h-[45vh] max-phoneL:px-2 ">
        <div className="flex gap-4 ml-[5rem]  w-[50%] px-4 py-9 rounded-xl bg-white shadow-[0px_10px_20px_#0B258580] max-laptop:w-[65%] max-laptop:ml-[3rem] max-tablet:ml-[1.5rem] max-tablet:w-[70%] max-phoneL:w-full max-phoneL:mx-auto max-phoneL:flex-col max-phoneP:py-6 max-phoneP:px-3">
          <div className="w-1/2 flex flex-col gap-4 max-phoneL:w-full">
            <h2 className="text-3xl font-bold border-b-2 self-start border-black/20 pb-1.5 max-tablet:text-2xl max-phoneL:text-xl   ">
              Mision
            </h2>
            <p className="text-lg max-tablet:text-base max-phoneL:text-[13px]">
              Passionately creating value for our clients by delivering
              innovative solutions
            </p>
          </div>
          <div className="w-1/2 flex flex-col gap-4 max-phoneL:w-full">
            <h2 className="text-3xl font-bold border-b-2 self-start border-black/20 pb-1.5 max-tablet:text-2xl max-phoneL:text-xl   ">
              Vision
            </h2>
            <p className="text-lg max-tablet:text-base max-phoneL:text-[12px]">
              Our vision is to be the foremost IT solutions provider across the
              African continent by 2030
            </p>
          </div>
        </div>
      </article>
      <article className=" backgroundimgs  h-[60vh] flex items-center px-6 max-phoneL:h-[45vh] max-phoneL:px-2 ">
        <div className="flex flex-col gap-4 mr-[5rem]  w-[40%] px-4 py-9 rounded-xl bg-white shadow-[0px_10px_20px_#0B258580] ml-auto max-laptop:mr-[3rem] max-tablet:mr-[1.5rem] max-tablet:w-[50%]  max-phoneL:w-full max-phoneL:mx-auto max-phoneP:py-6">
          <h2 className="text-3xl font-bold  max-tablet:text-2xl max-phoneL:text-xl ">
            Core Values
          </h2>
          <ul className="list-disc pl-5 space-y-2 ">
            <li className="text-lg max-tablet:text-base max-phoneL:text-[12px]">
              Strong relationships
            </li>
            <li className="text-lg max-tablet:text-base max-phoneL:text-[12px]">
              Excellent customer service
            </li>
            <li className="text-lg max-tablet:text-base max-phoneL:text-[12px]">
              Innovative solutions
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default MissionVision;
