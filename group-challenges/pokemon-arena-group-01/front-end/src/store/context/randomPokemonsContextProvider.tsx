import { useState, useEffect } from "react";
import { RandomPokemon } from "../../models/randomPokemon-model";
import { RandomPokemonsContext } from "./randomPokemonsContext";

import getOneRandomPokemon from "../../helpers/getOneRandomPokemon";

const RandomPokemonsContextProvider = ({ children }: any) => {
  const [userRandomPokemon, setUserRandomPokemon] = useState<RandomPokemon>();
  const [computerRandomPokemon, setComputerRandomPokemon] =
    useState<RandomPokemon>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Promise.allSettled([getOneRandomPokemon(), getOneRandomPokemon()]).then(
      (results) => {
        if (results[0].status === "fulfilled") {
          setUserRandomPokemon(results[0].value);
        }
        if (results[1].status === "fulfilled") {
          setComputerRandomPokemon(results[1].value);
        }
        setLoading(false);
      }
    );
  }, []);


  return (
    <RandomPokemonsContext.Provider
      value={{
        isLoading,
        setLoading,
        userRandomPokemon,
        setUserRandomPokemon,
        computerRandomPokemon,
        setComputerRandomPokemon,
      }}
    >
      {children}
    </RandomPokemonsContext.Provider>
  );
};

export default RandomPokemonsContextProvider;
