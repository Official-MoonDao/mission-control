import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import { Announcements, Proposals, Projects, Treasury } from "./views";
import useLocalStorage from "./utilities/useLocalStorage";
import { useAnnouncements } from "./api/useAnnouncements"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  const [lightMode, setLightMode] = useLocalStorage("lightMode", false);
  const { announcements, announcementsLoaded, announcementsError } = useAnnouncements();

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
