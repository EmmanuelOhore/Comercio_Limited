import BlogList from "./bloglist";
import BlofAside from "./blogaside";
import { useState } from "react";
import { blogspostlong } from "../../constants/contants";

function MainBlogSection() {
  const [searchQuery, setsearchQuery] = useState(""); // Search query
  const [filteredBlog, setfilteredBlog] = useState(blogspostlong); // Filtered blog posts
  const [currentindex, setsurrentindex] = useState(0); // Pagination index

  // Handle search input changes
  const handlesearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setsearchQuery(query);

    if (query.trim() === "") {
      setfilteredBlog(blogspostlong); // Reset when empty
    } else {
      const result = blogspostlong
        .filter((blog) => blog.title.toLowerCase().includes(query))
        .sort((a, b) => {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();

          // Prioritize titles that start with the query
          const startsWithA = titleA.startsWith(query) ? -1 : 0;
          const startsWithB = titleB.startsWith(query) ? -1 : 0;

          return startsWithA - startsWithB; // Sort accordingly
        });

      setfilteredBlog(result);
    }

    setsurrentindex(0); // Reset pagination index
  };
  return (
    <div className="flex py-[8rem] gap-[3rem] w-[80%]  mx-auto max-laptop:w-[90%] max-laptop:gap-4 max-tablet:w-full max-tablet:px-2 max-tablet:gap-2 max-phoneL:flex-col max-phoneL:py-[5rem] max-phoneL:gap-[3rem] max-phoneP:py-[4rem] ">
      <BlogList
        filteredBlog={filteredBlog}
        setfilteredBlog={setfilteredBlog}
        searchQuery={searchQuery}
        setsearchQuery={setsearchQuery}
        currentindex={currentindex}
        setsurrentindex={setsurrentindex}
        blogspostlong={blogspostlong}
        handlesearch={handlesearch}
      />
      <BlofAside handlesearch={handlesearch} searchQuery={searchQuery} />
    </div>
  );
}

export default MainBlogSection;
