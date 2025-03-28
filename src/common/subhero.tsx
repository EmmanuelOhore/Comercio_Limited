const Subhero = ({ page }: { page: string }) => {
  return (
    <>
      <section className="sub_hero_section relative flex items-end h-[65vh] p-8  tablet:p-4 phoneL:p-2">
        <div className="inset-0 bg-[#232429] opacity-50 absolute "></div>
        <div className="sub_hero_content flex flex-col gap-4 ml-[10%] z-10 tablet:ml-[3%] tablet:gap-2 phoneL:gap-1 phoneL:ml-[1%] ">
          <header className=" tablet:text-[.9rem] phoneL:text-[.7rem] phoneP:text-[.6rem]">
            <h1 className="text-[#D9D9DA] flex gap-1">
              Home
              <span>
                <i className="fa-solid fa-angle-right tablet:text-[.8rem]"></i>
              </span>
              {page}
              <span>
                <i className="fa-solid fa-angle-right tablet:text-[.8rem]"></i>
              </span>
            </h1>
          </header>
        </div>
      </section>
    </>
  );
};

export default Subhero;
