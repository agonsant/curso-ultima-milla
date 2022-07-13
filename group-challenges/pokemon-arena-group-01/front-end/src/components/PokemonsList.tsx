import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

const PokemonsList = () => {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon";
    const [pokemons, setPokemons] = useState<{name:string; url:string}[]>([]);

    useEffect(() => {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            let results = data.results;
            setPokemons(results);
        });
    }, []);

    return (
      <>
        <h1> Pokemon Go </h1>
        <ul>
          { pokemons.map((pokemon, index) => (
              <Pokemon key={index} name={pokemon.name} />
            ))
          }
        </ul>
      </>
    );

};

export default PokemonsList;