import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Navigation/Sidebar"
import {
  Announcements,
  Proposals,
  Projects,
  Treasury,
  Calendar,
} from "./views";
import useLocalStorage from "./utilities/useLocalStorage";
import { useAnnouncements } from "./api/useAnnouncements";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { HashRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
const Analytics = lazy(() => import("./views/Analytics/Analytics"));


const App = () => {
  const [lightMode, setLightMode] = useLocalStorage("lightMode", false);
  const {
    announcements,
    announcementsLoaded,
    announcementsError,
    setAnnouncements,
  } = useAnnouncements();

  return (
    <main
      className={`${
        !lightMode ? "dark stars-dark" : "stars-light"
      } min-h-screen `}
    >
      <ToastContainer />
      <HashRouter>
        <Sidebar lightMode={lightMode} setLightMode={setLightMode}/>
        <Routes>
          <Route path="/" element={<Proposals />}></Route>
          <Route
            path="/announcements"
            element={
              <Announcements
                announcements={announcements}
                announcementsLoaded={announcementsLoaded}
                announcementsError={announcementsError}
                setAnnouncements={setAnnouncements}
              />
            }
          ></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/treasury" element={<Treasury />}></Route>
          <Route path="/analytics" element={
          <Suspense>

            <Analytics />
          </Suspense>
          
          }></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route path="*" element={<Announcements />}></Route>
        </Routes>
      </HashRouter>
    </main>
  );
};

export default App;
