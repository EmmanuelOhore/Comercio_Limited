import BlogList from "./bloglist";
import placeholder from "../../assets/placeholder.png";
import BlofAside from "./blogaside";
import { useState } from "react";

function MainBlogSection() {
  const blogspostlong = [
    {
      img: placeholder,
      title: "Marketing Strategies for Digital Ecosystem",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
    },
    {
      img: placeholder,
      title: "Marketing Strategies for Digital Ecosystem",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
    },
    {
      img: placeholder,
      title: "Marketing Strategies for Digital Ecosystem",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
    },
    {
      img: placeholder,
      title: "Strategies Marketing  for Digital Ecosystem",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
    },
    {
      img: placeholder,
      title: "Digital Marketing Strategies for  Ecosystem",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
    },
    {
      img: placeholder,
      title: "Ecosystem Marketing Strategies for Digital ",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
    },
    {
      img: placeholder,
      title: "Local Marketing Strategies for  Ecosystem",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
    },
    {
      img: placeholder,
      title: "Marketing Strategies for Digital Ecosystem",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
    },
    {
      img: placeholder,
      title: "Marketing Strategies for Digital Ecosystem",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
    },
    {
      img: placeholder,
      title: "Marketing Strategies for Digital Ecosystem",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
    },
  ];
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
    <div className="flex py-[8rem] gap-[3rem] w-[80%]  mx-auto laptop:w-[90%] laptop:gap-4 tablet:w-full tablet:px-2 tablet:gap-2 phoneL:flex-col phoneL:py-[5rem] phoneL:gap-[3rem] phoneP:py-[4rem] ">
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
