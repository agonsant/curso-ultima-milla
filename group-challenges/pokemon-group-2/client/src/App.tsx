import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArenaPage from "./pages/ArenaPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage language={""} theme={""} />} />
        <Route path="/arena" element={<ArenaPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
