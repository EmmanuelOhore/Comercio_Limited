import placeholder from "../../assets/placeholder.png";
const AboutUs = () => {
  return (
    <section
      id="who-we-are"
      className="flex flex-col items-center gap-6 p-8 max-laptop:p-2 max-phoneL:py-6"
    >
      <div className="w-[90%] flex flex-col items-center gap-6 max-laptop:w-full max-phoneL:gap-4 ">
        <h2 className="text-4xl text-black/80 self-start font-bold  max-phoneL:text-3xl">
          About Us
        </h2>
        <div className="flex w-full overflow-hidden rounded-md border border-gray-300  max-tablet:flex-col-reverse">
          {/* Text Section */}
          <div className="flex flex-1 flex-col gap-8 py-8 px-4 max-tablet:p-4">
            <p className="text-base font-normal text-gray-700 max-laptop:text-[15px] max-laptop:font-normal  max-phoneL:text-[13.5px] max-phoneP:text-xs max-phoneP:leading-4.5">
              Comercio Limited is an IT solutions company. We offer Information
              Technology as a service, providing solutions and support for
              diverse needs such as provision of Industry-specific Solutions, IT
              hardware & Software equipment supplies, IT Security, Internet
              Infrastructure and Office business equipment. Our Company is based
              on the principles of developing and delivering top of the line
              Information Technology Training and Web Media Management.
            </p>

            <button className="self-start mt-auto rounded-md bg-main-blue px-6 py-3 text-sm text-white transition hover:opacity-90 max-phoneP:text-xs max-phoneP:font-semibold">
              Learn More
            </button>
          </div>

          {/* Image Section */}
          <div className="flex w-[40%] h-[60%] bg-cover bg-center p-2 max-laptop:w-[50%] max-tablet:w-full">
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

export default AboutUs;
