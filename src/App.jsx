import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Announcements, Projects, Bounties, Proposals, Treasury } from "./views";
import { useState } from "react";

// Set "Dark" class on "main" to toggle between color modes.

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main className={`${darkMode ? "dark from-emerald-900 via-slate-800  to-gray-900 " : "from-emerald-100 via-sky-200 to-indigo-200"} min-h-screen bg-gradient-to-r`}>
      <BrowserRouter>
        <Navbar darkMode={darkMode} changeColorMode={() => setDarkMode((darkMode) => !darkMode)} />
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
