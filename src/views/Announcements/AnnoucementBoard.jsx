import SearchBar from "../../components/SearchBar";
import Announcement from "./Announcement";
import { announcementTests } from "../../test-data/tests";
import Header from "../../components/Header";

const AnnoucementBoard = () => {
  return (
    <div className="mt-[31px] flex flex-col xl:mt-0 xl:mr-16 xl:min-w-[700px] xl:rounded-lg xl:bg-white xl:bg-opacity-60 xl:px-[58px] xl:pt-[16px] xl:pb-[24px] dark:xl:bg-opacity-[0.04]">
      <Header text={"All announcements"} />

      <div className="mt-[20px]">
        <SearchBar />
      </div>
      <div className="mt-[34px]">
        {announcementTests.map((e, i, a) => {
          return (
            <Announcement key={i} title={e.title} author={e.author} audience={e.audience} date={e.date} img={e.img} bottomBorder={i === a.length - 1 ? "border-b-[1px]" : ""} />
          );
        })}
      </div>
    </div>
  );
};

export default AnnoucementBoard;
