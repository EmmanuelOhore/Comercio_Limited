import placeholder from "../../assets/images.png";
const CyberSecurity = () => {
  return (
    <section className="mt-20 h-[60vh]">
      <div className="bg-[#f3f5f7] flex h-full">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center p-4">
          <div className="flex flex-col gap-6 w-[90%] ml-auto mr-8">
            <h2 data-aos="fade-up" className="text-[black] text-5xl font-bold">
              Our Cyber Security Training
            </h2>
            <p
              data-aos="fade-down"
              className="text-gray-700 text-base leading-6"
            >
              We believe in total office systems that work effectively while
              minimizing cost. In view of this, we offer the best products and
              services of leading manufacturers to meet every IT and office
              systems need of our clients. Because we know it really counts, we
              maintain an overall view of availing to our clients cost solutions
              which help reduces downtime.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfFupSlYU2qTdY2a1A28Vjy4eLJkhkHZunyRzY3Gr_Ry41emA/viewform?vc=0&c=0&w=1&flr=0&pli=1"
              target="_blank"
            >
              <button
                data-aos="fade-right"
                className="bg-[#0B2585] text-white py-3 px-6 rounded-md hover:bg-[#1f0f23] transition duration-300"
              >
                Volunteer Now
              </button>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            data-aos="zoom-in"
            className="w-[80%] h-[80%] border border-black/20 rounded-sm object-cover"
            src={placeholder}
            alt="Placeholder Image"
          />
        </div>
      </div>
    </section>
  );
};

export default CyberSecurity;
