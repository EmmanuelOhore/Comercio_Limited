import BlogPost from "./blogpost";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import Search from "../../common/search";

type Blog = {
  title: string;
  img: string;
  description: string;
};

type BlogListProps = {
  filteredBlog: Blog[];
  handlesearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setfilteredBlog: React.Dispatch<React.SetStateAction<Blog[]>>;
  searchQuery: string;
  setsearchQuery: React.Dispatch<React.SetStateAction<string>>;
  blogspostlong: Blog[];
  currentindex: number;
  setsurrentindex: React.Dispatch<React.SetStateAction<number>>;
};
function BlogList({
  filteredBlog,
  handlesearch,
  searchQuery,
  currentindex,
  setsurrentindex,
}: BlogListProps) {
  const [page, setPage] = useState(4);
  const [searchdisplay, setsearchdisplay] = useState(false);
  const handleScreen = () => {
    if (window.innerWidth < 400) {
      setPage(2);
      setsearchdisplay(true);
    } else {
      setPage(4);
      setsearchdisplay(false);
    }
  };

  useEffect(() => {
    handleScreen();
    window.addEventListener("resize", handleScreen);
    return () => {
      window.removeEventListener("resize", handleScreen);
    };
  }, []);
  // Pagination settings

  const totoalItem = filteredBlog.length;
  const pageCount = Math.ceil(totoalItem / page);
  // Handle page clicks
  const handlePageClick = (data: { selected: number }) => {
    setsurrentindex(data.selected);
  };
  const startIndex = currentindex * page;
  const endIndex = startIndex + page;
  const currentitems = filteredBlog.slice(startIndex, endIndex);

  return (
    <section className="">
      {searchdisplay && (
        <div className="pb-3">
          <Search searchQuery={searchQuery} handlesearch={handlesearch} />
        </div>
      )}
      <div className="grid grid-cols-2 gap-8  w-fit max-phoneL:gap-1 max-phoneL:p-3  max-phoneL:grid-cols-1 place-items-center   ">
        {currentitems.map((blog, index) => {
          return (
            <BlogPost
              key={index}
              title={blog.title}
              img={blog.img}
              des={blog.description}
            />
          );
        })}
      </div>
      <div className="text-center w-full">
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName="flex justify-center space-x-2 mt-6 
                      max-phoneL:space-x-1 max-phoneL:text-sm 
                      max-phoneP:flex-wrap max-phoneP:gap-2 max-phoneP:text-xs"
          pageClassName="px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200 
                 max-phoneL:px-3 max-phoneL:py-1 
                 max-phoneP:px-2 max-phoneP:py-1"
          activeClassName="bg-webpurple text-white border-blue-600"
          previousClassName="px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200
                     max-phoneL:px-3 max-phoneL:py-1
                     max-phoneP:px-2 max-phoneP:py-1"
          nextClassName="px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200
                 max-phoneL:px-3 max-phoneL:py-1
                 max-phoneP:px-2 max-phoneP:py-1"
          breakClassName="px-4 py-2 border border-gray-300 rounded-md cursor-pointer
                  max-phoneL:px-3 max-phoneL:py-1 
                  max-phoneP:px-2 max-phoneP:py-1"
          disabledClassName="opacity-50 cursor-not-allowed"
        />
      </div>
    </section>
  );
}

export default BlogList;
