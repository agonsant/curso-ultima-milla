import { createContext } from "react";
import { IPokemon } from "../../../types/pokemon.model";

interface IPokemonContext {
  pokemonA: IPokemon;
  pokemonB: IPokemon;

  //setPokemonData: () => void
}

const PokemonContext = createContext<IPokemonContext>({
  pokemonA: {
    name: "",
    id: "",
    stat: 0,
    images: {
      front: "",
      back: ""
    },
    moves: []
  },
  pokemonB: {
    name: "",
    id: "",
    stat: 0,
    images: {
      front: "",
      back: ""
    },
    moves: []
  }
  
  // setPokemonData: () => {},
});

PokemonContext.displayName = "Pokemon Context";

export default PokemonContext;
