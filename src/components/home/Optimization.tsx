import placeholder from "../../assets/placeholder.png";
const OptimizingSection = () => {
  return (
    <section className="flex justify-center my-[3rem]  py-[3rem]">
      <div className="flex w-[85%]  rounded-md ">
        <article className="w-1/2 flex  flex-col gap-6 p-6 bg-black/3">
          <h1 className="text-4xl text-black font-bold  w-[80%]">
            Cost-Optimizing Section Management Solution
          </h1>
          <p className="text-lg font-light ">
            MTN Nigeria was able to continue its business growth with a cost
            -optimizing Section management capability in place. MTN reduced its
            yearly spend on high-end storage by over 37% despite its Section
            growth
          </p>
          <button className="text-base font-light  self-start rounded-md bg-[#0B2585] text-white   py-3 px-8">
            Read Case Study
            <i className="fa-solid ml-2.5 text-sm fa-arrow-right"></i>
          </button>
        </article>
        <article className="w-1/2">
          <img src={placeholder} alt="placeholder" className="w-full h-full" />
        </article>
      </div>
    </section>
  );
};

export default OptimizingSection;
