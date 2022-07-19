import { useParams } from "react-router";
import "./RankingPage.scss";

const RankingPage = () => {
  const params = useParams();

  return (
    <>
      <div className="ranking-page">
        <h2>The winner is {params.name?.toUpperCase()}. </h2>
      </div>
    </>
  );
};

export default RankingPage;
