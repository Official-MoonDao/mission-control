import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Announcements, Projects, Bounties, Proposals, Treasury } from "./views";
import useLocalStorage from "./hooks&utils/useLocalStorage";

const App = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  return (
    <main className={`${darkMode ? "dark from-indigo-900 via-slate-800  to-slate-900 " : "from-emerald-100 via-sky-200 to-indigo-200"} min-h-screen bg-gradient-to-r`}>
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
