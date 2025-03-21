import placeholder from "../../assets/placeholder.png";
const ExtraOrdinary = () => {
  return (
    <section id="who-we-are" className="flex flex-col items-center gap-6 p-8">
      <div className="w-[90%] flex flex-col items-center gap-6">
        <div className="flex w-full overflow-hidden rounded-md border border-gray-300 shadow-md shadow-[#2a152f]/30">
          <div className="flex flex-1 flex-col gap-8 py-8 px-4">
            <h2 className="text-4xl  text-black/80 self-start font-bold ">
              Extra Ordinary
            </h2>
            <p className="text-base font-normal leading-6 text-gray-700">
              We design very affordable and stunning websites for all sizes of
              business. We specialize in different in corporate, E-Learning,
              E-commerce, Agricultural, E-book and Biography websites.
            </p>

            <button className="self-start mt-auto rounded-md bg-[#0B2585] px-6 py-3 text-sm text-white transition hover:opacity-90">
              Learn More
            </button>
          </div>

          {/* Image Section */}
          <div className="flex w-[40%] h-[60%] bg-cover bg-center p-2">
            <img
              data-aos="zoom-in"
              src={placeholder}
              alt="Placeholder Image"
              className="w-full h-[70%] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraOrdinary;
