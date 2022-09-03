import { SearchIcon } from "../assets";

const SearchBar = () => {
  return (
    <label className="relative block ">
      <div className="absolute inset-y-0 left-6 flex items-center">
        <SearchIcon />
      </div>

      <input
        className="px-[52px] rounded-md py-4  min-w-[335px] bg-white bg-opacity-[00.6]  placeholder-white placeholder-opacity-[0.45] "
        placeholder="Search"
        type="text"
        name="search"
      />
    </label>
  );
};

export default SearchBar;
