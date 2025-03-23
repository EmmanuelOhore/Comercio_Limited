const Recentblogs = ({ img, title }: { img: string; title: string }) => {
  return (
    <>
      <div className="flex gap-4 ">
        <div className="w-[11rem] h-[5rem] max-laptop:w-[10rem] max-laptop:h-[4rem] max-phoneL:h-[5.5rem]">
          <img src={img} alt="image" className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[16px] font-bold leading-[22px] capitalize max-laptop:text-[11px] max-laptop:leading-[13px] max-phoneL:text-[12px] max-phoneL:leading-[17px] max-phoneL:w-[70%] max-phoneP::text-[11px] max-phoneP::w-full">
            {title}
          </h1>
          <div className="flex  gap-4 ">
            <span className="text-[11px] text-[#0B2585] max-laptop:text-[10px]">
              <i className="fa-solid fa-calendar-days"></i> Sept. 30, 2020{" "}
            </span>
            <span className="text-[11px] text-[#0B2585] max-laptop:text-[10px]">
              <i className="fa-solid fa-comment"></i>19
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recentblogs;
