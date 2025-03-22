const Search = ({
  searchQuery,
  handlesearch,
}: {
  searchQuery: string;
  handlesearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="seach  border  border-black overflow-hidden rounded-md shadow-sm ">
      <input
        type="text"
        className="p-3 w-full tablet:p-2 tablet:placeholder:text-[14px]"
        name="search"
        value={searchQuery}
        onChange={handlesearch}
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
