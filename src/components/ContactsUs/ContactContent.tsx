function ContactContent() {
  const contacData = [
    {
      icon: "fa-solid fa-location-dot",
      title: "Address",
      description: "Plot 1438 Sanusi Fafunwa Victoria Island",
    },
    {
      icon: "fa-solid fa-phone",
      title: "Phone",
      description: "+2348123746132",
    },
    {
      icon: "fa-solid fa-envelope",
      title: "Email",
      description: "info@comerciolimited.com.ng",
    },
    {
      icon: "fa-solid fa-earth-americas",
      title: "Website",
      description: "Comercio Limited",
    },
  ];
  return (
    <section className="contact-content  shadow-[0px_5px_20px_#0B258580]  flex  overflow-hidden  rounded-md max-tablet:flex-col max-phoneP:gap-7">
      <div className="get0n_TOUCH  flex flex-col w-[50%]  p-[3rem] gap-4 max-laptop:w-[60%] max-tablet:w-full max-phoneL:p-4 max-phoneP:p-1">
        <h1 className="font-bold text-[28px] leading-[42px] uppercase max-laptop:text-[20px] max-phoneL:text-[18px] max-phoneL:leading-[20px] max-phoneP:text-[16px] max-phoneP:leading-[18px]">
          Get in Touch
        </h1>
        <form
          action="£"
          className=" flex flex-col h-full gap-6  max-phoneL:w-[100%]"
        >
          <div className="name_heaeder flex justify-between">
            <input
              type="text"
              className="border-[2px] border-[#0B2585] p-2 w-[45%] max-phoneL:placeholder:text-[.8rem] max-phoneL:h-[2.5rem] max-phoneP:h-8 max-phoneP:w-[48%]"
              placeholder="Name"
              required
              name="Name"
            />
            <input
              type="email"
              className="border-[2px] border-[#0B2585] p-2 w-[45%]  max-phoneL:placeholder:text-[.8rem] max-phoneL:h-[2.5rem]  max-phoneP:h-8 max-phoneP:w-[48%]"
              placeholder="Email"
              required
              name="Email"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="border-[2px] border-[#0B2585] p-2 w-[100%]  max-phoneL:placeholder:text-[.8rem] max-phoneL:h-[2.5rem]  max-phoneP:h-8"
            required
            name="Subject"
          />
          <textarea
            placeholder="Message"
            required
            name="Message"
            className="border-[2px] border-[#0B2585] p-2 w-full h-[9rem] max-phoneL:placeholder:text-[.8rem] resize-none max-phoneL:h-[7rem] max-phoneP:h-[6rem]"
          ></textarea>
          <button
            type="submit"
            className="p-2 w-fit bg-[#0B2585] text-white max-phoneL:text-[.8rem] max-phoneL:p-2.5 rounded-sm"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="contact-info  flex flex-col  items-center w-[50%]  p-[3rem] gap-8 bg-[#232429] max-laptop:w-[45%] max-tablet:w-full max-phoneP:gap-5">
        <h1 className="font-bold text-[28px] leading-[42px] uppercase text-white max-laptop:text-[20px] max-phoneL:text-[18px] max-phoneL:leading-[20px] max-phoneP:text-[16px] max-phoneP:leading-[18px] ">
          Contact us
        </h1>
        <div className="contact-info-box  flex flex-col gap-8 max-laptop:gap-5 max-phoneP:gap-3">
          {contacData.map((item, index) => {
            return (
              <div
                key={index}
                className="contact-info-box-item  flex gap-4 items-center max-phoneL:gap-2"
              >
                <div className="contact-info-box-icon">
                  <i
                    className={`${item.icon} text-[20px]  p-3 rounded-full text-white bg-[#393A3F] max-laptop:text-[16px] max-phoneP:text-[13px] max-phoneP:p-2.5 `}
                  ></i>
                </div>
                <div className="contact-info-box-text flex gap-2">
                  <h1 className="text-[16px] leading-[29px] text-[#0B2585] font-bold capitalize max-laptop:text-[14px] max-phoneP:text-[13px]">
                    {item.title} :
                  </h1>
                  <p className="text-[16px] font-normal leading-[29px] text-white max-laptop:text-[14px] max-phoneP:text-[13px] ">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContactContent;
