import { useContext } from "react";
import { ThemeContext } from "../store/context/ThemeContext";

const RankingPage = () => {
  const {isNightModeOn} = useContext(ThemeContext);
    return (
        <>
        <div className={`"arena-page" ${isNightModeOn ? "background-night text-night" : "background-light text-light"}`}>
        <h2>Ranking Page</h2>
        </div>
        </>
    )
};

export default RankingPage;