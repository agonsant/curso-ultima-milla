export type RandomPokemon = {
    id: number,
    moves: Array<PokemonMove>,
    name: string,
    stats: number,
    types: Array<PokemonType>,
    sprites: PokemonSprites,
} | undefined;

export type PokemonMove = {
    name: string,
    power: number,
};

export type PokemonSprites = {
    back_default: string | undefined,
    front_default: string | undefined,
};

export type PokemonType = {
    slot: number,
    type: {
        name: string,
        url: string,
    }
};