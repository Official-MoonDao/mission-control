import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import { Announcements, Projects, Bounties, Proposals, Treasury } from "./views";
import useLocalStorage from "./hooks&utils/useLocalStorage";

const App = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  return (
    <main className={`${darkMode ? "dark stars-dark" : "stars-light"} min-h-screen `}>
      <BrowserRouter>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Announcements />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/bounties" element={<Bounties />}></Route>
          <Route path="/proposals" element={<Proposals />}></Route>
          <Route path="/treasury" element={<Treasury />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
