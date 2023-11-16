import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Navigation/Sidebar";
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

function RouteRedirect({ route = "" }) {
  const baseUrl = "http://app.moondao.com";
  window.location.href = baseUrl + route;
  return null;
}

const App = () => {
  //Note: Announcements are currently being loaded here and passed as a prop so they can get loaded in the back while other section is being visited. This works for now but it would be better to implement a cleaner way to load announcements in the background.

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
        !lightMode ? "stars-dark dark" : "stars-light"
      } min-h-screen `}
    >
      <ToastContainer />
      <HashRouter>
        <Sidebar lightMode={lightMode} setLightMode={setLightMode} />
        <Routes>
          <Route path="/" element={<RouteRedirect />} />
          <Route path="/announcements" element={<RouteRedirect />} />
          <Route path="/projects" element={<RouteRedirect />} />
          <Route
            path="/calendar"
            element={<RouteRedirect route={"/calendar"} />}
          />
          <Route
            path="/analytics"
            element={<RouteRedirect route={"/analytics"} />}
          />
          <Route
            path="/treasury"
            element={<RouteRedirect route={"/analytics"} />}
          />
          <Route path="*" element={<RouteRedirect />} />
        </Routes>
      </HashRouter>
    </main>
  );
};

export default App;

/*

OLD ROUTES


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


*/
