function BlogDetails() {
  return (
    <div className="blog_details flex items-centerg gap-2 shadow-lg rounded-lg w-fit bg-white p-2 absolute top-[40%] left-[15%] max-laptop:top-[47%] max-tablet:top-[43%] max-tablet:left-[10%] max-phoneL:left-[18%] max-phoneL:top-[52%] max-phoneP:top-[51%] max-phoneP:left-[15%]">
      <div className="date flex gap-2 items-center max-tablet:gap-1">
        <i className="fa-solid fa-calendar-days text-[#0B2585] max-phoneP:text-[14px]"></i>
        <p className="uppercase  font-medium text-[12px] leading-[22px] max-tablet:text-[10px] max-tablet:leading-[15px] max-phoneP:text-[10px] max-phoneP:leading-[12px]">
          sept. 23, 2020
        </p>
      </div>
      <div className="admin flex gap-2 items-center text-[#0B2585]">
        <i className="fa-solid fa-user max-phoneP:text-[14px]"></i>
        <p className="uppercase  font-medium text-[12px] leading-[22px] max-tablet:text-[10px] max-tablet:leading-[15px] max-phoneP:text-[10px] max-phoneP:leading-[12px]">
          Admin
        </p>
      </div>
      <div className="chat_bubble flex gap-2 items-center text-[#0B2585]">
        <i className="fa-solid fa-comment max-phoneP:text-[15px] "></i>
        <p className="uppercase  font-medium text-[12px] leading-[22px] max-tablet:text-[10px] max-tablet:leading-[15px] max-phoneP:text-[10px] max-phoneP:leading-[12px]">
          3
        </p>
      </div>
    </div>
  );
}

export default BlogDetails;
