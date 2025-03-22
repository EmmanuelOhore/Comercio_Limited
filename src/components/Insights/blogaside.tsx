import blog1 from "../../assets/placeholder.png";
import blog2 from "../../assets/placeholder.png";
import blog3 from "../../assets/placeholder.png";
import Recentblogs from "./recenrBlogs";
import Aos from "aos";
import { useEffect, useState } from "react";
import Search from "../../common/search";

function BlofAside({
  searchQuery,
  handlesearch,
}: {
  searchQuery: string;
  handlesearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [searcdisplay, setsearcdisplay] = useState(false);
  const handleScreen = () => {
    if (window.innerWidth > 500) {
      setsearcdisplay(true);
    } else {
      setsearcdisplay(false);
    }
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
  useEffect(() => {
    handleScreen();
    window.addEventListener("resize", handleScreen);
    return () => {
      window.removeEventListener("resize", handleScreen);
    };
  }, []);
  const blogData = [
    {
      title: "Marketing Strategies for Digital Ecosystem",
      img: blog1,
    },
    {
      title: "Marketing Strategies for Digital Ecosystem",
      img: blog3,
    },
    {
      title: "Marketing Strategies for Digital Ecosystem",
      img: blog2,
    },
  ];
  return (
    <section className=" w-[30%] p-4 flex flex-col gap-[4rem] max-tablet:p-2 max-tablet:gap-8 max-phoneL:w-full ">
      {searcdisplay && (
        <Search searchQuery={searchQuery} handlesearch={handlesearch} />
      )}

      <div className="recebt_blog flex flex-col gap-4">
        <h1
          data-aos="fade-down"
          className="uppercase font-bold leading-[30px] text-[20px] max-laptop:text-[17px] max-laptop:leading-[25px] max-tablet:text-[15px]"
        >
          recent blog
        </h1>
        <div data-aos="fade-up" className="blogs flex flex-col gap-3">
          {blogData.map((blog, index) => {
            return (
              <Recentblogs key={index} img={blog.img} title={blog.title} />
            );
          })}
        </div>
      </div>
      <div className="categories_tag flex w-[60%] gap-4 flex-col max-laptop:w-[90%] max-laptop:gap-3 max-phoneP:w-[100%]">
        <h1
          data-aos="fade-down"
          className="font-bold  leading-[30px] text-[20px] uppercase max-laptop:text-[17px] max-laptop:leading-[25px] max-tablet:text-[15px]"
        >
          tag cloud
        </h1>
        <div className="flex gap-[.3rem]  flex-wrap">
          <h2
            data-aos="fade-left "
            className="uppercase leading-[20px] text-[11px] font-bold py-1 px-2  border border-[#E5E5E5] rounded-md max-laptop:text-[10px]  max-laptop:font-semibold"
          >
            design
          </h2>
          <h2
            data-aos="fade-left "
            data-aos-delay="200"
            className="uppercase leading-[20px] text-[11px] font-bold py-1 px-2  border border-[#E5E5E5] rounded-md max-laptop:text-[10px]  max-laptop:font-semibold"
          >
            learn
          </h2>
          <h2
            data-aos="fade-left "
            data-aos-delay="400"
            className="uppercase leading-[20px] text-[11px] font-bold py-1 px-2  border border-[#E5E5E5] rounded-md max-laptop:text-[10px]  max-laptop:font-semibold"
          >
            bag
          </h2>
          <h2
            data-aos="fade-left "
            data-aos-delay="600"
            className="uppercase leading-[20px] text-[11px] font-bold py-1 px-2  border border-[#E5E5E5] rounded-md max-laptop:text-[10px]  max-laptop:font-semibold"
          >
            pen
          </h2>
          <h2
            data-aos="fade-left "
            data-aos-delay="800"
            className="uppercase leading-[20px] text-[11px] font-bold py-1 px-2  border border-[#E5E5E5] rounded-md max-laptop:text-[10px]  max-laptop:font-semibold"
          >
            education
          </h2>
          <h2
            data-aos="fade-left "
            data-aos-delay="1000"
            className="uppercase leading-[20px] text-[11px] font-bold py-1 px-2  border border-[#E5E5E5] rounded-md"
          >
            teacher
          </h2>
          <h2
            data-aos="fade-left "
            data-aos-delay="1200"
            className="uppercase leading-[20px] text-[11px] font-bold py-1 px-2  border border-[#E5E5E5] rounded-md"
          >
            course
          </h2>
        </div>
      </div>
      <div className="paragrahn flex flex-col gap-4 max-tablet:gap-2">
        <h1
          data-aos="fade-down"
          className="font-bold text-[20px] leading-[30px] uppercase  max-laptop:text-[17px] max-laptop:leading-[25px] max-tablet:text-[15px]"
        >
          Paragraph
        </h1>
        <p
          data-aos="fade-up"
          className="text-[15px] leading-[27px] font-normal text-[#9D9D9D] max-laptop:text-[13px] max-laptop:leading-[19.5px] max-tablet:text-[11px] max-tablet:leading-[15px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          itaque, autem necessitatibus voluptate quod mollitia delectus aut,
          sunt placeat nam vero culpa sapiente consectetur similique, inventore
          eos fugit cupiditate numquam!
        </p>
      </div>
    </section>
  );
}

export default BlofAside;
