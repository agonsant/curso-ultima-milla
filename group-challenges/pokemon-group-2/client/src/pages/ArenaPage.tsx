import HealthBar from "../components/HealthBar";

const ArenaPage = () => {
  return (
    <>
      <h1>Hello world - Arena Page</h1>
      <HealthBar maxValue={30} minValue={0} isEmpty={false}></HealthBar>
    </>
  );
};

export default ArenaPage;
