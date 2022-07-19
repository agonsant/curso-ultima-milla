/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import useAPI from "../../../hooks/useAPI";
import PokemonContext from "./pokemonContext";

type PokemonProps = {
  children: React.ReactNode;
};

const PokemonContextProvider: React.FC<PokemonProps> = ({ children }: any) => {
  const [pokemonA, setPokemonA] = useState({
    name: "",
    id: "",
    stat: 0,
    images: {
      front: "",
      back: "",
    },
    moves: [],
  });
  const [pokemonB, setPokemonB] = useState({
    name: "",
    id: "",
    stat: 0,
    images: {
      front: "",
      back: "",
    },
    moves: [
      {
        move: {
          name: "",
          url: "",
        },
      },
    ],
  });

  const { getOnePokemonData, getPokemonAttackDamage } = useAPI();

  useEffect(() => {
    const randomIdA = Math.floor(Math.random() * 150 + 1).toString();
    const randomIdB = Math.floor(Math.random() * 150 + 1).toString();
    getOnePokemonData(randomIdA).then((pokemon) => setPokemonA(pokemon));
    getOnePokemonData(randomIdB).then((pokemon) => setPokemonB(pokemon));
    console.log("starting HP - no damage:", pokemonA.stat);

    const url = "https://pokeapi.co/api/v2/move/3/";

    getPokemonAttackDamage(url).then((value: any) =>
      setPokemonA({ ...pokemonA, stat: pokemonA.stat - value })
    );
    console.log("damaged pokemon:", pokemonA);
  }, []);

  console.log("damaged pokemon 2:", pokemonA);

  return (
    <PokemonContext.Provider value={{ pokemonA, pokemonB }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
