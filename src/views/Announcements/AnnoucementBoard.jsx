import SearchBar from "../../components/SearchBar";
import Announcement from "./Announcement";
import { announcementTests } from "../../test-data/tests";

const AnnoucementBoard = () => {
  return (
    <div className="flex flex-col">
      <h3 className="font-Montserrat text-white text-[28px]">All announcements</h3>

      <div className="mt-[20px]">
        <SearchBar />
      </div>
      <div className="mt-[34px]">
        {announcementTests.map((e,i) => {
          return <Announcement key={i} title={e.title} author={e.author} audience={e.audience} date={e.date} img={e.img} />;
        })}
      </div>
    </div>
  );
};

export default AnnoucementBoard;
