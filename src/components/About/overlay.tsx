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
      <section className=" relative  h-[60vh]  flex flex-col gap-10 justify-center items-center max-laptop:mt-8 max-laptop:h-[40vh] max-tablet:h-[30vh]  max-tablet:my-[1rem] max-tablet:gap-6 max-phoneL:h-auto  max-phoneL:justify-start max-phoneL:p-8">
        <h2 className="text-5xl font-bold max-laptop:text-4xl max-tablet:text-3xl  max-phoneL:text-2xl">
          Why we stand out
        </h2>
        <div className="overlay_conatent flex !gap-[4rem] z-10  max-laptop:gap-[2rem] max-tablet:gap-4  max-phoneL:!gap-[2rem] ">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="overlay_box flex gap-3  p-2  rounded-md "
              >
                <div className="box_text flex   flex-col items-center gap-4 max-laptop:gap-3 max-tablet:gap-2">
                  <h2
                    ref={ref}
                    className="font-bold leading-[56px]   text-[32px]  max-laptop:text-[24px] max-laptop:leading-[24px]  max-tablet:text-[20px] max-tablet:leading-[20px] max-phoneL:text-20px] max-phoneL:leading-[16px] phoneP:text-[15px] phoneP:leading-[12px] "
                  >
                    {inView ? (
                      <CountUp
                        end={item.num}
                        className=" text-[50px] max-laptop:text-[40px] max-tablet:text-[30px] max-phoneL:text-[25px]"
                        duration={5}
                      />
                    ) : (
                      0
                    )}
                  </h2>
                  <h3 className="font-semibold   leading-[14px] !text-xl  max-laptop:!text-lg  uppercase max-laptop:w-[50%] max-laptop:text-[12px] max-laptop:leading-[12px]  max-tablet:!text-[15px] max-tablet:leading-[10px] max-phoneL:!text-[10px] max-phoneL:leading-[11px] phoneP:text-[7px] phoneP:leading-[9px]">
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
