import logo1 from "../assets/clientele/ABBEY.png";
import logo2 from "../assets/clientele/ECO-BANK.png";
import logo3 from "../assets/clientele/FRIST-BNK.png";
import logo4 from "../assets/clientele/MULTICHOICE-1.png";
import logo5 from "../assets/clientele/NDPR.jpg";
import logo6 from "../assets/clientele/ORIENTAL-1.jpg";
import logo7 from "../assets/clientele/SPECTRUM.png";
import logo8 from "../assets/clientele/engen.jpg";
import logo9 from "../assets/clientele/fideloty.png";
import logo10 from "../assets/clientele/seplast-3.png";
import logo11 from "../assets/clientele/usoad.png";
import logo12 from "../assets/clientele/zenith-bank.png";
import { SwiperSlide, Swiper } from "swiper/react";
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

type AboutLogosProps = {
  header: string;
  text: string;
};

const Carosel = ({ header, text }: AboutLogosProps) => {
  const LogoData = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
  ];

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
            spaceBetween={10}
            slidesPerView={5}
            speed={4000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
          >
            {LogoData.map((logo, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={logo}
                    alt="holder"
                    className="w-[5rem] h-full max-tablet:w-[4rem] max-tablet:h-[3rem] max-phoneP:w-[2rem] max-phoneP:h-[2rem]"
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
