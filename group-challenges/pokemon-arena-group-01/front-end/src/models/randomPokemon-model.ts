export type RandomPokemon = {
    id: number,
    moves: Array<PokemonMove>,
    name: string,
    stats: Array<PokemonStats>,
    types: Array<PokemonType>,
    sprites: Array<PokemonSprites>,
};

export type PokemonMove = {
    move: {
        name: string,
        url: string,
    },
    version_group_details: Array<PokemonMoveVersion>
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
    front_default: string,
    back_default: string,
};

export type PokemonType = {
    slot: number,
    type: {
        name: string,
        url: string,
    }
};

export type PokemonStats = {
    stat: {
        name: string,
        url: string,
    },
    effort: number,
    base_stat: number,
}