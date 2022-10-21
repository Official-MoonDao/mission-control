import { Line } from "../../components/Layout";
import Announcement from "./Announcement";
import Header from "../../components/Header";
import SectionLayout from "../../components/Layout/SectionLayout";
import AnnouncementSkeletons from "../../components/Skeletons/AnnouncementSkeletons";
import { useState, useEffect } from "react";
import { errorToast } from "../../hooks&utils/errorToast";

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
          setAnnouncements(result);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }, []);

  if (error) errorToast("Connection with Discord failed. Contact MoonDAO if the problem persists 🚀");

  return (
    <SectionLayout>
      <Header text={"Announcements"} />
      <Line />

      <div className="mt-[34px]">
        {!isLoaded || error ? (
          <AnnouncementSkeletons />
        ) : (
          announcements.map((e) => <Announcement key={e.id} content={e.content} mentions={e.mentions} author={e.author} timestamp={e.timestamp} reactions={e.reactions} />)
        )}
      </div>
    </SectionLayout>
  );
};

export default AnnoucementBoard;
