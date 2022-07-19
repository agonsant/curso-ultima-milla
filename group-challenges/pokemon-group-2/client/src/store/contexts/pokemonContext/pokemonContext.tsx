import { createContext } from "react";
import { IPokemon } from "../../../types/pokemon.model";

interface IPokemonContext {
  pokemonA: IPokemon;
  pokemonB: IPokemon;
}

const PokemonContext = createContext<IPokemonContext>({
  pokemonA: {
    name: "",
    id: "",
    stat: 0,
    images: {
      front: "",
      back: "",
    },
    moves: [],
  },
  pokemonB: {
    name: "",
    id: "",
    stat: 0,
    images: {
      front: "",
      back: "",
    },
    moves: [],
  },
});

PokemonContext.displayName = "Pokemon Context";

export default PokemonContext;
