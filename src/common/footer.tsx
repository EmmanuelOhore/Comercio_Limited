function Footer() {
  const exploreData = [
    { explore: "About", info: "Join us", company: "About us", link: "/about" },
    { explore: " Contact", info: "Blog", company: "Blog", link: "/contact" },
    {
      explore: " Porfolio",
      info: "Privacy & Policy",
      company: "Contact",
      link: "/portfolio",
    },
    {
      explore: "  Blog",
      info: "Conditions",
      company: "Careers",
      link: "/blog",
    },
  ];
  const socialinks = [
    "fa-linkedin-in",
    "fa-tiktok",
    "fa-facebook-f",
    "fa-twitter",
  ];
  return (
    <footer className=" py-[3rem] flex bg-black  justify-center  items-center max-tablet:px-4 max-phoneP:px-2">
      <div className="w-[90%] flex gap-4  justify-between max-laptop:w-[90%] max-tablet:w-[100%]  max-phoneL:flex-col max-phoneL:gap-6">
        <div className="company_info flex-1 flex flex-col gap-6 max-laptop:w-[30%] max-laptop:gap-4 max-phoneL:w-[90%] ">
          <h1 className="font-bold leading-[30px] text-white  text-[20px] uppercase max-laptop:text-[18px] max-tablet:text-[16px] max-tablet:leading-[20px]">
            Comercio Limited
          </h1>
          <div className="flex flex-col gap-3">
            <p className=" text-[#BCBCBE] text-[16px] leading-[23px] font-normal max-laptop:text-[14px] max-laptop:leading-[20px] max-tablet:text-[12px] max-tablet:leading-[15px]">
              Far far away, behind the word mountains, far from the
              countries,steady on the internet thats where our heart lies.
            </p>
            <div className="social_media flex gap-3 max-tablet:items-center ">
              {socialinks.map((item, index) => {
                return (
                  <i
                    key={index}
                    className={`fa-brands ${item} text-white bg-webpurple p-3 rounded-full text-[14px] max-tablet:p-[.6rem] max-tablet:text-[12px] max-phoneP:p-[.5rem] max-phoneP:text-[11px]`}
                  ></i>
                );
              })}
            </div>
          </div>
        </div>

        {/* quick links */}
        <div className="flex w-[70%] justify-between max-laptop:w-[65%] max-phoneL:w-[100%] ">
          {/* explore */}
          <div className="explore  flex flex-col gap-6 max-laptop:gap-3">
            <h1 className="uppercase text-[20px] text-white leading-[30px] font-bold max-laptop:text-[18px] max-tablet:text-[16px] max-tablet:leading-[20px] max-phoneL:text-[12px] max-phoneL:leading-[15px] max-phoneP:text-[10px] max-phoneP:leading[13px-]">
              Explore
            </h1>
            <ul className="max-laptop:flex max-laptop:flex-col max-laptop:gap-1 ">
              {exploreData.map((item, index) => {
                return (
                  <div key={index}>
                    <li className="text-[#BCBCBE] text-[16px] font-normal leading-[29px] max-laptop:text-[14px] max-laptop:leading-[20px] max-tablet:text-[12px] max-tablet:leading-[15px] max-phoneL:text-[10px] max-phoneL:leading-[12px] max-phoneP:text-[9px] max-phoneP:leading-[10px]">
                      <span>
                        <i className="fa-solid fa-angle-right pr-1 max-phoneP:pr-0"></i>
                      </span>
                      {item.explore}
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          {/* Info */}
          <div className="info  flex flex-col gap-6 max-laptop:gap-3 ">
            <h1 className="uppercase text-[20px] text-white  leading-[30px] font-bold max-laptop:text-[18px] max-tablet:text-[16px] max-tablet:leading-[20px] max-phoneL:text-[12px] max-phoneL:leading-[15px] max-phoneP:text-[10px] max-phoneP:leading[13px-] max-phoneP:pl-[.7rem]">
              Info
            </h1>
            <ul className="max-laptop:flex max-laptop:flex-col max-laptop:gap-1  ">
              {exploreData.map((item, index) => {
                return (
                  <div key={index}>
                    <li className="text-[#BCBCBE] text-[16px] font-normal leading-[29px] max-laptop:text-[14px] max-laptop:leading-[20px] max-tablet:text-[12px] max-tablet:leading-[15px] max-phoneL:text-[10px] max-phoneL:leading-[12px] max-phoneP:text-[9px] max-phoneP:leading-[10px] max-phoneP:w-">
                      <span>
                        <i className="fa-solid fa-angle-right pr-1"></i>
                      </span>
                      {item.info}
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          {/* Company */}
          <div className="compasny  flex flex-col gap-6 max-laptop:gap-3">
            <h1 className="uppercase text-white  text-[20px] leading-[30px] font-bold max-laptop:text-[18px] max-tablet:text-[16px] max-tablet:leading-[20px] max-phoneL:text-[12px] max-phoneL:leading-[15px] max-phoneP:text-[10px] max-phoneP:leading[13px-]">
              Company
            </h1>
            <ul className="max-laptop:flex max-laptop:flex-col max-laptop:gap-1 ">
              {exploreData.map((item, index) => {
                return (
                  <div key={index}>
                    <li className="text-[#BCBCBE] text-[16px] font-normal leading-[29px] max-laptop:text-[14px] max-laptop:leading-[20px] max-tablet:text-[12px] max-tablet:leading-[15px] max-phoneL:text-[10px] max-phoneL:leading-[12px] max-phoneP:text-[9px] max-phoneP:leading-[10px] ">
                      <span>
                        <i className="fa-solid fa-angle-right pr-1"></i>
                      </span>
                      {item.company}
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          {/* question */}
          <div className="question  flex flex-col gap-6 max-laptop:gap-3">
            <h1 className="font-bold text-white uppercase leading-[30px] text-[20px] max-laptop:text-[18px] max-tablet:text-[16px] max-tablet:leading-[20px] max-phoneL:text-[12px] max-phoneL:leading-[15px] max-phoneP:text-[10px] max-phoneP:leading-[13px] max-phoneP:pl-4">
              Have a Question?
            </h1>
            <div className="flex flex-col gap-2 laptop:gap-1">
              <div className="question_map flex gap-2 items-center">
                <i className="fa-solid fa-map text-webpurple max-tablet:text-[.9rem] max-phoneL:text-[.7rem] max-phoneP:text-[.6rem] "></i>
                <p className="text-[#BCBCBE] laptop:text-[14px] max-tablet:text-[12px] max-phoneL:text-[10px] max-phoneP:text-[9px]">
                  {" "}
                  Omu-Aran, Kwara-State
                </p>
              </div>
              <div className="question_phone flex items-center gap-2">
                <i className="fa-solid fa-phone text-webpurple text-[.9rem] max-phoneL:text-[.7rem]  max-phoneP:text-[.6rem]"></i>
                <p className="text-[#BCBCBE]  laptop:text-[14px] max-tablet:text-[12px] max-phoneL:text-[10px] max-phoneP:text-[9px]">
                  +234 815 9531 614
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
