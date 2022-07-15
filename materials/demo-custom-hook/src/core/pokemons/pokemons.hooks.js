import { useState, useEffect } from "react";
import { getPokemons } from "./pokemons.api";

/**
 * Lo importante del custom hook es definir que datos necesita la interfaz
 * y que acciones necesito realizar con esos datos
 */
export const usePokemons = () => {
    const [pokemonList, updatePokemonList] = useState([]);
    const [nextUrl, updateNextUrl] = useState('https://pokeapi.co/api/v2/pokemon');

    const retrievePokemons = async () => {
        const {next, list} = await getPokemons(nextUrl); // Esto devuelve Promise<void>
        updateNextUrl(next);
        updatePokemonList(list);
    }

    useEffect(() => {
        retrievePokemons()
    }, []); // Solo en la fase de montado del componente

    const nextPokemons = () => retrievePokemons();

    return {
        pokemonList,
        nextPokemons
    }
}