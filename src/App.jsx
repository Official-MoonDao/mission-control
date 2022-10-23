import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import { Announcements, Projects, Proposals, Treasury } from "./views";
import useLocalStorage from "./hooks&utils/useLocalStorage";
import { useState, useEffect } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// URL to Python server that fetches discord data via proxy
const ANNOUNCEMENTS_API_URL = "https://guarded-journey-41457.herokuapp.com/https://discordapimoondao.herokuapp.com/";

const App = () => {
  const [lightMode, setLightMode] = useLocalStorage("lightMode", false);

  const [announcementsError, setAnnouncementsError] = useState(null);
  const [announcementsLoaded, setAnnouncementsLoaded] = useState(false);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetch(ANNOUNCEMENTS_API_URL)
      .then((res) => res.json())
      .then(
        (result) => {
          setAnnouncements(result);
          setAnnouncementsLoaded(true);
        },
        (error) => {
          setAnnouncementsError(error);
          setAnnouncementsLoaded(true);
        }
      );
  }, []);

  return (
    <main className={`${!lightMode ? "dark stars-dark" : "stars-light"} min-h-screen `}>
      <ToastContainer />
      <BrowserRouter>
        <Navbar lightMode={lightMode} setLightMode={setLightMode} />
        <Routes>
          <Route path="/" element={<Announcements announcements={announcements} announcementsLoaded={announcementsLoaded} announcementsError={announcementsError} />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/proposals" element={<Proposals />}></Route>
          <Route path="/treasury" element={<Treasury />}></Route>
          <Route path="*" element={<Announcements />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
