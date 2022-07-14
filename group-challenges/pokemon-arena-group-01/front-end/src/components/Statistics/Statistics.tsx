import "./Statistics.scss";

const Statistics = ({pokemon}:any) => {
  console.log(pokemon);
  return (
    <div className="statistics">
      <p className="statistics__pokemon-name">Pokemon name: {pokemon.name} </p>
      <p className="statistics__pokemon-level">Pokemon level:   </p>
      <p className="statistics__pokemon-health-bar"></p>
    </div>  
  )
};

export default Statistics;