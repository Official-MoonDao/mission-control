import SearchBar from "../../components/SearchBar";
import Announcement from "./Announcement";
import { announcementTests } from "../../test-data/tests";
import Header from "../../components/Header";
import SectionLayout from "../../components/Layout/SectionLayout";

const AnnoucementBoard = () => {
  return (
    <SectionLayout>
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
    </SectionLayout>
  );
};

export default AnnoucementBoard;
