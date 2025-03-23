import placeholder from "../../assets/placeholder.png";
const CyberSecurity = () => {
  return (
    <section className="mt-20 h-[60vh] max-tablet:h-auto">
      <div className="bg-[#f3f5f7] flex h-full max-tablet:flex-col-reverse max-tablet:p-6 max-phoneL:p-2">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center p-4 max-phoneP:p-2">
          <div className="flex flex-col gap-6 w-[90%] ml-auto mr-8 max-tablet:mr-0 max-tablet:ml-0 max-phoneL:w-full max-phoneL:gap-4">
            <h2 className="text-[black] text-5xl font-bold max-laptop:text-4xl max-tablet:text-3xl max-phoneL:text-2xl max-phoneP:text-xl">
              Our Cyber Security Training
            </h2>
            <p className="text-gray-700 text-base leading-6 max-phoneL:text-sm max-phoneP:text-xs max-phoneP:leading-4 ">
              We believe in total office systems that work effectively while
              minimizing cost. In view of this, we offer the best products and
              services of leading manufacturers to meet every IT and office
              systems need of our clients. Because we know it really counts, we
              maintain an overall view of availing to our clients cost solutions
              which help reduces downtime.
            </p>
            <a target="_blank">
              <button
                data-aos="fade-right"
                className="bg-[#0B2585] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#1f0f23] transition duration-300 max-phoneL:text-sm max-phoneP:text-[10px] max-phoneP:px-3 max-phoneP:py-2"
              >
                Volunteer Now
              </button>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className=" w-[50%] h-[80%]  max-laptop:h-[70%] max-tablet:w-full flex justify-center items-center ">
          <img
            data-aos="zoom-in"
            className="w-full h-full border border-black/20 rounded-sm object-cover max-tablet:h-full max-tablet:w-full"
            src={placeholder}
            alt="Placeholder Image"
          />
        </div>
      </div>
    </section>
  );
};

export default CyberSecurity;
