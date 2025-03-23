import placeholder from "../../assets/placeholder.png";
const ExtraOrdinary = () => {
  return (
    <section
      id="who-we-are"
      className="flex flex-col items-center gap-6 p-8  max-phoneL:py-[1rem] max-phoneL:px-2 max-phoneL:my-[1.5rem] max-phoneP:py-[.5rem]"
    >
      <div className="w-[90%] flex flex-col items-center gap-6 max-phoneL:w-full  ">
        <div className="flex w-full overflow-hidden rounded-md border border-gray-300 max-tablet:flex-col-reverse">
          <div className="flex flex-1 flex-col gap-8 py-8 px-4 max-phoneL:gap-3 max-phoneL:p-4 max-phoneP:gap-2">
            <h2 className="text-4xl  text-black/80 self-start font-bold   max-laptop:text-3xl max-laptop:w-full max-phoneL:text-xl max-phoneP:text-lg max-phoneP:leading-[1.3rem]">
              Extra Ordinary
            </h2>
            <p className="text-base font-normal leading-6 text-gray-700 max-laptop:text-base max-laptop:font-normal max-phoneL:text-sm max-phoneP:text-xs max-phoneP:leading-4.5">
              We design very affordable and stunning websites for all sizes of
              business. We specialize in different in corporate, E-Learning,
              E-commerce, Agricultural, E-book and Biography websites.
            </p>

            <button className="self-start mt-auto rounded-md bg-[#0B2585] px-6 py-3 text-sm text-white transition hover:opacity-90  max-laptop:font-medium max-phoneL:text-xs max-phoneL:px-4 max-phoneL:mt-3 max-phoneP:text-[10px]">
              Learn More
            </button>
          </div>

          {/* Image Section */}
          <div className="flex w-[40%] h-[60%] max-laptop:w-[50%] max-tablet:w-full bg-cover bg-center p-2">
            <img
              src={placeholder}
              alt="Placeholder Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraOrdinary;
