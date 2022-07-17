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

export type PokemonMoveVersion = {
    move_learn_method: {
        name: string,
        url: string,
    },
    version_group: {
        name: string,
        url: string,
    },
    level_learned_at: number,
}

export type PokemonSprites = {
    back_default: string | null,
    front_default: string | null,
};

export type PokemonType = {
    slot: number,
    type: {
        name: string,
        url: string,
    }
};