import { createContext } from "react";
import { IPokemon } from "../../../types/pokemon.model";

interface IPokemonContext {
  pokemonA: IPokemon;
  pokemonB: IPokemon;
  pokemonAttack: (link: string) => void;
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
  pokemonAttack: (link: string) => {},
});

PokemonContext.displayName = "Pokemon Context";

export default PokemonContext;
