import logo1 from "../../assets/parthners/dell.png";
import logo2 from "../../assets/parthners/Kaspesky_Antivirus_logo.png";
import logo3 from "../../assets/parthners/MICIROSFT-2.png";
import logo4 from "../../assets/parthners/avavaya.png";
import logo5 from "../../assets/parthners/cisco-1.png";
import logo6 from "../../assets/parthners/hp.png";
import logo7 from "../../assets/parthners/huawei.jpg";
import logo8 from "../../assets/parthners/lenovo.png";
import { SwiperSlide, Swiper } from "swiper/react";
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const AboutLogos = () => {
  const logoData = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];
  return (
    <section className="flex justify-center  my-[6rem]  py-10 max-laptop:my-[3rem] max-laptop:py-5">
      <div className=" w-[90%] justify-center flex  items-center flex-col  gap-10 p-4 max-tablet:w-full  ">
        <header className="gap-3 flex flex-col items-center max-tablet:gap-1">
          <h2 className="text-4xl font-bold text-black/80 w-[70%] max-laptop:w-[90%]  max max-tablet:text-2xl max-tablet:w-full  max-phoneL:text-xl max-phoneL:text-center max-phoneP:text-base max-phoneP:leading-[1.3rem]  ">
            Leading and Value-Driven Companies Trust their Businesses with
            Comercio Limited
          </h2>
          <h3 className="text-base  text-black/64 text-center max-phoneL:text-sm">
            This is just a few of our partners
          </h3>
        </header>

        <article className="flex justify-between w-[80%]  max-laptop:w-[90%] max-phoneL:w-[97%]">
          <Swiper
            modules={[Scrollbar, A11y, Autoplay]}
            spaceBetween={5}
            slidesPerView={5}
            speed={4000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
          >
            {logoData.map((logo, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={logo}
                    alt="holder"
                    className="w-[5rem] h-auto max-tablet:w-[3rem] max-phoneP:w-[2rem] "
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

export default AboutLogos;
