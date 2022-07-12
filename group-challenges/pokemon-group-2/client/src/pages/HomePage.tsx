import React from "react";
import useAPI from "../hooks/useAPI";

const HomePage = () => {

  const { getPokemonImage } = useAPI();

  const idPokemon = "1";
 
   const urlImage = async(id: string) => await getPokemonImage(id)
   
  return (
    <>
      <h1>Hello world - Homepage</h1>
      <img alt="pokemon" width="100" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"/>
      <img alt="pokemon" width="100" src={`${urlImage(idPokemon)}`}/>

    </>
  );
};

export default HomePage;
