type whoProps = Record<string, string>;
const Whycards = ({ header, img, text }: whoProps) => {
  return (
    <div className="flex flex-col items-center    gap-4 max-phoneL:gap-2 max-phoneP:w-[90%] max-phoneL:mx-auto max-phoneL:shadow-[0px_5px_20px_#0B258580] max-phoneL:py-2 max-phoneL:px-2 max-phoneL:rounded-lg">
      <header className="w-[20rem] flex overflow-hidden rounded-lg justify-center max-laptop:w-[18rem] max-phoneL:w-full ">
        <img src={img} alt="placeholder" className="w-full h-full" />
      </header>
      <div className="flex items-center gap-1 flex-col max-phoneL:gap-0">
        <h3 className="text-2xl font-bold text-[#202329] max-laptop:text-xl max-tablet:text-lg max-phoneL:text-[15px]">
          {header}
        </h3>
        <p className="text-center w-[80%] text-sm  font-normal text-[#98A6BF]  max-laptop:w-full max-tablet:text-[13px] max-phoneL:text-[11px] ">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Whycards;
