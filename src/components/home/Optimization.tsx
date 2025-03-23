import placeholder from "../../assets/placeholder.png";
const OptimizingSection = () => {
  return (
    <section className="flex justify-center my-[3rem]  py-[3rem] max-phoneL:py-[1rem] max-phoneL:px-4 max-phoneL:my-[1.5rem]">
      <div className="flex w-[85%]  rounded-md overflow-hidden  max-laptop:w-[90%] max-tablet:flex-col-reverse max-tablet:w-[85%] max-phoneL:w-full  ">
        <article className="w-1/2 flex  flex-col gap-6 p-6 bg-black/3 max-tablet:w-full max-phoneL:p-3 max-phoneL:gap-3 max-phoneP:p-2">
          <h1 className="text-4xl text-black font-bold  w-[80%] max-laptop:text-3xl max-laptop:w-full max-phoneL:text-xl max-phoneP:text-lg max-phoneP:leading-[1.3rem]">
            Cost-Optimizing Section Management Solution
          </h1>
          <p className="text-lg font-normal max-laptop:text-base max-laptop:font-normal text-black/70 max-phoneL:text-sm max-phoneP:text-xs ">
            MTN Nigeria was able to continue its business growth with a cost
            -optimizing Section management capability in place. MTN reduced its
            yearly spend on high-end storage by over 37% despite its Section
            growth
          </p>
          <button className="text-base font-light  self-start rounded-md bg-[#0B2585] text-white   py-3 px-8 max-laptop:font-medium max-phoneL:text-xs max-phoneL:px-4 max-phoneL:mt-3 max-phoneP:text-[10px]">
            Read Case Study
            <i className="fa-solid ml-2.5 text-sm fa-arrow-right max-phoneP:text-[10px]"></i>
          </button>
        </article>
        <article className="w-1/2 max-tablet:w-full ">
          <img src={placeholder} alt="placeholder" className="w-full h-full" />
        </article>
      </div>
    </section>
  );
};

export default OptimizingSection;
