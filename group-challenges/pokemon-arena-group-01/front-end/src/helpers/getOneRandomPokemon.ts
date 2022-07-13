const getOneRandomPokemon = async () => {
    const randomPokemon = Math.floor(Math.random() * (1155 - 1) + 1); // Allow us to select a random number, from 1 to 1154
                                                                      // (max of Pokemons existents, for now).

    const apiURL = `https://pokeapi.co/api/v2/pokemon/${randomPokemon}`; // The random number it's used as id parameter

    const res = await fetch(apiURL);
    try {
        const response = await res.json();
        const pokemonProperties = {
            name: response.name,
            id: response.id,
            moves: response.moves,
            types: response.types,
            stats: response.stats,
            sprites: response.sprites,
        }
        console.log(pokemonProperties);
        return pokemonProperties;
    } catch (error) {
        return false
    }
};

getOneRandomPokemon();

export default getOneRandomPokemon;