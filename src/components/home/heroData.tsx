type HeroProps = Record<string, string>;
import { useState } from "react";
const HeroData = ({ header, text, btn }: HeroProps) => {
  const [clicked, setClicked] = useState(false);
  return (
    <section
      onMouseUp={() => setClicked(!clicked)}
      className={`h-[85vh] bg-black/20  ${
        clicked ? "cursor-grabbing" : "cursor-grab"
      }  flex items-center !bg-no-repeat !bg-cover !bg-center `}
    >
      <div className="ml-[15rem] flex gap-4 flex-col max-laptop:ml-[10rem] max-laptop:gap-2 max-tablet:ml-[5rem] max-phoneL:ml-[2rem] max-phoneL:gap-1 max-phoneP:ml-[1.5rem] max-phoneP:gap-2">
        <h2 className="text-xl font-medium max-laptop:font-nromal max-laptop:text-lg max-tablet:text-base  max-phoneL:text-sm max-phoneP:text-xs">
          {header}
        </h2>
        <h3 className="text-5xl font-semibold w-[70%]  max-laptop:text-4xl max-laptop:font-bold max-tablet:text-3xl max-phoneL:text-2xl max-phoneL:w-[90%] max-phoneL:leading-[1.5rem] max-phoneP:text-xl max-phoneP:leading-[1.12rem] max-phoneP:font-semibold">
          {text}
        </h3>
        <div className="mt-4 max-phoneP:mt-2">
          <button className="text-lg font-semibold rounded-lg bg-[#0B2585] text-white   py-3 px-8 max-laptop:px-6 max-laptop:py-2.5 max-tablet:text-base max-tablet:px-4 max-tablet:py-2.5 max-phoneL:text-sm max-phoneL:px-4 max-phoneL:py-2 max-phoneP:text-xs">
            {btn}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroData;
