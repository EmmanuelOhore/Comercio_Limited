import placeholder from "../assets/placeholder.png";
import { SwiperSlide, Swiper } from "swiper/react";
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

type AboutLogosProps = {
  header: string;
  text: string;
};

const Carosel = ({ header, text }: AboutLogosProps) => {
  const arraydata = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section className="flex justify-center  my-[6rem]  py-10 max-laptop:my-[3rem] max-laptop:py-5 max-phoneL:my-[1.5rem]">
      <div className=" w-[90%] justify-center flex   flex-col  gap-10 p-4 max-tablet:w-full max-tablet:gap-5 max-phoneL:gap-5 max-phoneP:gap-3 ">
        <header className="gap-3 flex flex-col    max-tablet:gap-0 max-phoneL:gap-1">
          <h2 className="text-4xl font-bold  text-black/80 w-[70%] max-laptop:w-[90%]   max-tablet:text-2xl max-tablet:w-full  max-phoneL:text-lg max-phoneP:text-base max-phoneP:leading-[1.3rem]   ">
            {header}
          </h2>
          <h3 className="text-base  text-black/64  max-phoneL:text-sm max-phoneP:text-[10px]">
            {text}
          </h3>
        </header>

        <article className="flex justify-between w-[80%]  max-laptop:w-[90%] max-phoneL:w-[97%]">
          <Swiper
            modules={[Scrollbar, A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={5}
            pagination={{ clickable: true }}
            autoplay={{ delay: 1500 }}
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

export default Carosel;
