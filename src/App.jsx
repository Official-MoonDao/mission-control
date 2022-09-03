import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import { Announcements, Balance, Bounties, Proposals, Treasury } from "./views";

const App = () => {
  return (
    <main className="min-h-screen bg-gradient-to-r from-moon-orange via-background-middle to-background-right">
    <BrowserRouter>
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Announcements />}></Route>
          <Route path="/balance" element={<Balance />}></Route>
          <Route path="/bounties" element={<Bounties />}></Route>
          <Route path="/proposals" element={<Proposals />}></Route>
          <Route path="/treasury" element={<Treasury />}></Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
    </main>
  );
};

export default App;
