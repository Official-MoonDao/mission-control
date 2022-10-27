import { useState, useEffect } from "react";

export const useAnnouncements = () => {
  // URL to Python server that fetches discord data via proxy
  const ANNOUNCEMENTS_API_URL = "https://guarded-journey-41457.herokuapp.com/https://discordapimoondao.herokuapp.com/";

  const [announcements, setAnnouncements] = useState([]);
  const [announcementsError, setAnnouncementsError] = useState(null);
  const [announcementsLoaded, setAnnouncementsLoaded] = useState(false);

  useEffect(() => {
    fetch(ANNOUNCEMENTS_API_URL)
      .then((res) => res.json())
      .then(
        (result) => {
          setAnnouncements(result);
          setAnnouncementsLoaded(true);
        },
        (error) => setAnnouncementsError(error)
      );
  }, []);

  return { announcements, announcementsLoaded, announcementsError };
};
