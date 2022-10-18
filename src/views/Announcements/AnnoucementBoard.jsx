import SearchBar from "../../components/SearchBar";
import Announcement from "./Announcement";
import { announcementTests } from "../../test-data/tests";
import Header from "../../components/Header";
import SectionLayout from "../../components/Layout/SectionLayout";
import { useState, useEffect } from "react";

// URL to Python server that fetches discord data via proxy
const ANNOUNCEMENTS_API_URL = "https://guarded-journey-41457.herokuapp.com/https://discordapimoondao.herokuapp.com/";

const AnnoucementBoard = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetch(ANNOUNCEMENTS_API_URL)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setAnnouncements(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <SectionLayout>
        <Header text={"Announcements"} />
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
  }
};

export default AnnoucementBoard;
