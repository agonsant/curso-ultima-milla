export type RandomPokemon = {
    id: number,
    moves: Array<PokemonMove>,
    name: string,
    stats: Array<PokemonStats>,
    types: Array<PokemonType>,
    sprites: PokemonSprites,
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
    back_default: string | null,
    back_female: string | null,
    back_shiny: string | null,
    back_shiny_female: string | null,
    front_default: string | null,
    front_female: string | null,
    front_shiny: string | null,
    front_shiny_female: string | null,
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