import { Line } from "../../components/Layout";
import Announcement from "./Announcement";
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

  return (
    <SectionLayout>
      <Header text={"Announcements"} />
      <Line/>

      <div className="mt-[34px]">
        {!isLoaded || error
          ? "Loading or failed"
          : announcements.map((e) => <Announcement key={e.id} content={e.content} mentions={e.mentions} author={e.author} timestamp={e.timestamp} reactions={e.reactions} />)}
      </div>
    </SectionLayout>
  );
};

export default AnnoucementBoard;
