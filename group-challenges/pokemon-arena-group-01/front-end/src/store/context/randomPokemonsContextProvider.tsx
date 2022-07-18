import { useState} from "react";
import { RandomPokemon } from "../../models/randomPokemon-model";
import { RandomPokemonsContext } from "./randomPokemonsContext";

const RandomPokemonsContextProvider = ({ children }: any) => {

    const [userRandomPokemon, setUserRandomPokemon] = useState<RandomPokemon>();
    const [computerRandomPokemon, setComputerRandomPokemon] = useState<RandomPokemon>();
    const [isLoading, setLoading] = useState(false);

  return (
    <RandomPokemonsContext.Provider
      value = { {
          isLoading,
          setLoading,
          userRandomPokemon,
          setUserRandomPokemon,
          computerRandomPokemon,
          setComputerRandomPokemon
        }}
    >
      {children}
    </RandomPokemonsContext.Provider>
  )
};

export default RandomPokemonsContextProvider;