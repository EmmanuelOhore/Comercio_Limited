import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import Lightbox from "yet-another-react-lightbox";
import { useRef, useState } from "react";
import "yet-another-react-lightbox/styles.css";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/swiper-bundle.css";

import teamMemeber1 from "../../assets/placeholder.png";
import teamMemeber2 from "../../assets/placeholder.png";
import teamMemeber3 from "../../assets/placeholder.png";

function TeamMemebers() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);
  const images = [teamMemeber1, teamMemeber2, teamMemeber3];

  const handleMouseEnter = () => {
    if (swiperRef.current) swiperRef.current.autoplay.stop();
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) swiperRef.current.autoplay.start();
  };
  const teamData = [
    {
      name: "DR. SEGUN AINA, (OFR)",
      role: "Chairman",
    },
    {
      name: "SOLA ADEYEGBE",
      role: "Executive Director",
    },
    {
      name: "ADERONKE ADEYEGBE",
      role: "Managing Director",
    },
  ];
  return (
    <>
      <div className="slider-container  w-full mx-auto max-phoneL:w-[90%]">
        <Swiper
          modules={[Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          loop
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1.5 },
            500: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="!h-[550px] relative max-laptop:!h-[400px] max-phoneL:!h-[400px] group  max-phoneP:!h-[350px]"
            >
              <span
                onClick={() => {
                  swiperRef.current?.autoplay.stop();
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
                className="bg-gradient-to-b from-white  to-[#0B2585] absolute inset-0 opacity-65 origin-top scale-y-0 transition-all  duration-300 group-active:scale-y-50 group-hover:scale-y-50 "
              ></span>
              <span
                onClick={() => {
                  swiperRef.current?.autoplay.stop();
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
                className="bg-gradient-to-t from-white  to-[#0B2585] absolute inset-0 opacity-65 origin-bottom scale-y-0 transition-all  duration-[600ms] group-active:scale-y-50 group-hover:scale-y-50 "
              ></span>

              <img
                src={image}
                onClick={() => {
                  swiperRef.current?.autoplay.stop();
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
                alt={`Team Member ${index + 1}`}
                className="slider-image  h-full object-cover rounded-md cursor-pointer"
              />
              {/* team member information */}
              {teamData[index] && (
                <div className="absolute z-30 opacity-0  w-full py-4 left-[50%] cursor-pointer translate-x-[-50%] top-[50%] translate-y-[-50%] flex flex-col gap-8 transition-all duration-[600ms] group-active:opacity-100  group-hover:opacity-100">
                  <header className="flex flex-col justify-center items-center gap-6">
                    <h2 className="text-white uppercase text-[25px] font-bold text-center">
                      {teamData[index].name}
                    </h2>
                    <h3 className="font-normal text-white uppercase">
                      {teamData[index].role}
                    </h3>
                  </header>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        {isOpen && (
          <div>
            <Lightbox
              open={isOpen}
              close={() => setIsOpen(false)}
              slides={images.map((src) => ({ src }))}
              index={photoIndex}
              on={{
                view: ({ index }) => setPhotoIndex(index),
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default TeamMemebers;
