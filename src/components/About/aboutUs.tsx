import placeholder from "../../assets/placeholder.png";
const AboutUs = () => {
  return (
    <section id="who-we-are" className="flex flex-col items-center gap-6 p-8">
      <div className="w-[90%] flex flex-col items-center gap-6">
        <h2 className="text-4xl text-black/80 self-start font-bold ">
          About Us
        </h2>
        <div className="flex w-full overflow-hidden rounded-md border border-gray-300 shadow-md shadow-[#2a152f]/30">
          {/* Text Section */}
          <div className="flex flex-1 flex-col gap-8 py-8 px-4">
            <p className="text-base font-normal leading-6 text-gray-700">
              Comercio Limited is an IT solutions company. We offer Information
              Technology as a service, providing solutions and support for
              diverse needs such as provision of Industry-specific Solutions, IT
              hardware & Software equipment supplies, IT Security, Internet
              Infrastructure and Office business equipment. Our Company is based
              on the principles of developing and delivering top of the line
              Information Technology Training and Web Media Management.
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

export default AboutUs;
