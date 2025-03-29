// import placeholder from "../../assets/placeholder.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Autoplay, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";
import HeroData from "./heroData";

const HeroSection = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Scrollbar, Autoplay, EffectFade]}
        spaceBetween={50}
        pagination={{ clickable: true }}
        effect="fade"
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        fadeEffect={{ crossFade: true }}
        loop
        speed={2000}
      >
        <SwiperSlide>
          <HeroData
            header="Welcome to Our Website"
            text="We are a leading company in our industry, providing top-notch services to our clients."
            btn="Get Started"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroData
            header="Work with us"
            text="Deployment Presense in over 30 countries across Africa, Europe, and Asia."
            btn="Learn More"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroData
            header="Partners"
            text="Comercio achice fornight level expert partnershipd"
            btn="See Partners"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSection;
