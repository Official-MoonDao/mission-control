import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import { Announcements, Projects, Bounties, Proposals, Treasury } from "./views";
import useLocalStorage from "./hooks&utils/useLocalStorage";

const App = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  return (
    <main className={`${darkMode ? "dark from-slate-900 via-sky-900 to-slate-900 " : "from-amber-200 via-moon-gold to-amber-200"} min-h-screen bg-gradient-to-r`}>
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
