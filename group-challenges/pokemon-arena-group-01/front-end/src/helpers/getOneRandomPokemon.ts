import randomMovesId from './randomMovesId';
import randomMoves from './randomMoves';

const getOneRandomPokemon = async () => {
    const randomPokemon = Math.floor(Math.random() * (900 - 1) + 1); // Allow us to select a random number, from 1 to 900
                                                                      // (max of Pokemons existents, for now).

    const apiURL = `https://pokeapi.co/api/v2/pokemon/${randomPokemon}`; // The random number it's used as id parameter

    const res = await fetch(apiURL);
    try {
        const response = await res.json();
        const pokemonProperties = {
            name: response.name,
            id: response.id,
            moves: await randomMoves(randomMovesId(response.moves, 4)), // We want only 4 random moves
            types: response.types,
            stats: response.stats[0].base_stat,
            sprites: {
                back_default: response.sprites.back_default,
                front_default: response.sprites.front_default,
            },
        };
        return pokemonProperties;
    } catch (error) {
        throw new Error('There is not pokemon');
    }
};

export default getOneRandomPokemon;