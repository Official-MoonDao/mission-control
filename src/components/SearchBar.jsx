import { SearchIcon } from "../assets";

const SearchBar = () => {
  return (
    <label className="relative block">
      <div className="absolute inset-y-0 left-6 flex items-center">
        <SearchIcon color="stroke-black dark:stroke-white" />
      </div>

      <input
        className="min-w-[335px] rounded-md border-[0.5px] border-black border-opacity-20 px-[52px] py-4 text-gray-900 shadow dark:bg-white dark:bg-opacity-10 dark:text-gray-100  dark:placeholder-white dark:placeholder-opacity-[0.45]"
        placeholder="Search"
        type="text"
        name="search"
      />
    </label>
  );
};

export default SearchBar;
