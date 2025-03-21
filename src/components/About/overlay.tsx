import placeholder from "../../assets/placeholder.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import { useEffect } from "react";

const Overlay = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const data = [
    {
      num: 2,
      text: "Support",
      img: placeholder,
    },
    {
      num: 50,
      text: "Developing",
      img: placeholder,
    },
    {
      num: 2,
      text: "Projects",
      img: placeholder,
    },
  ];
  return (
    <>
      <section className="overlay relative mt-[8rem] h-[40vh]  flex flex-col gap- justify-center items-center tablet:h-[30vh] tablet:mb-[8vh] phoneL:h-auto  phoneL:justify-start phoneL:p-8">
        {/* <div className="black_screen absolute inset-0 bg-black bg-opacity-70"></div> */}
        <h2 className="text-4xl font-bold "> Why we stand out </h2>
        <div className="overlay_conatent flex gap-[4rem] z-10  laptop:gap-[2rem] tablet:gap-4 phoneL:flex-col ">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="overlay_box flex gap-3 outline outline-white  px-10 rounded-md py-4"
                data-aos="fade-up"
              >
                <div className="box_text flex flex-col items-center gap-1 laptop:gap-3 tablet:gap-2">
                  <h2
                    ref={ref}
                    className="font-bold leading-[56px]  text-[32px]  laptop:text-[24px] laptop:leading-[24px]  tablet:text-[20px] tablet:leading-[20px] phoneL:text-20px] phoneL:leading-[16px] phoneP:text-[15px] phoneP:leading-[12px] "
                  >
                    {inView ? (
                      <CountUp
                        end={item.num}
                        className=" text-[60px]"
                        duration={5}
                      />
                    ) : (
                      0
                    )}
                  </h2>
                  <h3 className="font-semibold leading-[14px] text-  uppercase laptop:w-[50%] laptop:text-[12px] laptop:leading-[12px]  tablet:text-[10px] tablet:leading-[10px] phoneL:text-[10px] phoneL:leading-[11px] phoneP:text-[7px] phoneP:leading-[9px]">
                    {item.text}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Overlay;
