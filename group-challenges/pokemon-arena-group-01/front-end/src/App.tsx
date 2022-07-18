import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import UserOponent from "./pages/UserOponent/UserOponent";
import ArenaPage from "./pages/ArenaPage/ArenaPage";
import RankingPage from "./pages/RankingPage/RankingPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "./App.scss";
import { useContext } from "react";
import { ThemeContext } from "./store/context/ThemeContext";

function App() {
  const { isNightModeOn } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <div
        className={`app-global-container ${
          isNightModeOn
            ? "background-night text-night"
            : "background-light text-light"
        }`}
      >
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/useroponent" element={<UserOponent />} />
          <Route path="/arena" element={<ArenaPage />} />
          <Route path="/ranking" element={<RankingPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
