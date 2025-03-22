import placeholder from "../../assets/placeholder.png";
import { SwiperSlide, Swiper } from "swiper/react";
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const CompanyLogosSection = () => {
  const arraydata = Array.from({ length: 6 }, (_, i) => i + 1);
  return (
    <section className="flex justify-center my-[4rem] py-10 max-tablet:my-[2rem] max-tablet:py-5">
      <div className=" w-[90%] justify-center flex  items-center flex-col  gap-10 p-4 max-phoneL:w-full ">
        <h2 className="text-4xl font-bold text-black/80  max-tablet:text-3xl max-phoneL:text-2xl max-phoneL:text-center max-phoneP:text-lg max-phoneP:leading-[1.3rem] ">
          We protect 100+ enterprises and businesses
        </h2>
        <article className="flex justify-between w-[80%]  max-laptop:w-[90%] max-phoneL:w-[97%]">
          <Swiper
            modules={[Scrollbar, A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={5}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop
            breakpoints={{
              320: { slidesPerView: 5 },
              480: { slidesPerView: 5 },
              500: { slidesPerView: 5 },
              900: { slidesPerView: 5 },
              1280: { slidesPerView: 5 },
            }}
          >
            {arraydata.map((_, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="w-[5rem]   group max-phoneL:w-[6rem]"
                >
                  <img
                    src={placeholder}
                    alt="holder"
                    className="w-full  h-full"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </article>
      </div>
    </section>
  );
};

export default CompanyLogosSection;
