import React from "react";
import {  RandomPokemon } from "../../models/randomPokemon-model";

export interface IRandomPokemonsContext {
    isLoading: boolean;
    setLoading: (isLoading: boolean) => void;
    userRandomPokemon: RandomPokemon,
    setUserRandomPokemon: (pokemon: RandomPokemon) => void;
    computerRandomPokemon: RandomPokemon,
    setComputerRandomPokemon: (pokemon: RandomPokemon) => void;
};

export const RandomPokemonsContext = React.createContext<IRandomPokemonsContext>({
    isLoading: false,
    setLoading: () => {},
    userRandomPokemon: undefined,
    setUserRandomPokemon: () => {},
    computerRandomPokemon: undefined,
    setComputerRandomPokemon: () => {},
});