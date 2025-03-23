import BlogDetails from "./blogDetals";
function BlogPost({
  title,
  img,
  des,
}: {
  title: string;
  img: string;
  des: string;
}) {
  return (
    <div className="blog_post  hover:scale-105 duration-300 transition-all  flex flex-col gap-4  overflow-hidden w-[20rem] relative shadow-[0px_5px_20px_#0B258580] rounded-md max-laptop:w-[19rem] max-tablet:w-[15rem] max-phoneL:w-[100%] max-phoneP:w-[90%]">
      {/* <BlogDetails /> */}
      <div className="blog_post_img ">
        <img src={img} alt="blog_post_img" className="w-full" />
      </div>
      <div className="blog_post_content flex px-3 flex-col gap-3 py-9 max-laptop:gap-4 max-tablet:gap-2 max-phoneL:pt-5 max-phoneP:pt-4 max-phoneP:gap-2">
        <header>
          <h1 className=" font-bold text-[20px] leading-[30px] text-webpurple text-center uppercase max-laptop:text-[18px] max-laptop:leading-[24px] max-tablet:text-[15px] max-tablet:leading-[20px] max-phoneL:text-[13px] max-phoneL:leading-[15px] max-phoneP:text-[13px] max-phoneP:leading-[15px]">
            {title}
          </h1>
        </header>
        <p className="text-[16px] leading-[28.8px] font-normal text-[#999999] text-center max-laptop:text-[14px] max-laptop:leading-[19.6px] max-tablet:text-[12px] max-tablet:leading-[15px] max-phoneL:text-[10px] max-phoneL:leading-[12px] max-phoneP:text-[10px] max-phoneP:leading-[15px]">
          {des}
        </p>
      </div>
    </div>
  );
}

export default BlogPost;
