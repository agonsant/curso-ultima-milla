import HealthBar from "../components/HealthBar";
import PokemonCard from "../components/PokemonCard";

const ArenaPage = () => {
  return (
    <>
      <h1>Hello world - Arena Page</h1>
      <HealthBar maxValue={30} minValue={0} isEmpty={false}></HealthBar>
      <PokemonCard/>
    </>
  );
};

export default ArenaPage;
