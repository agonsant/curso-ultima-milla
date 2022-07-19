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
    id: number,
    power: number,
    priority: number,
    typeName: string,
    // damage_relations: PokemonDamageRelations,
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

export type PokemonDamageRelations = {
    double_damage_from: Array<string>;
    double_damage_to: Array<string>;
    half_damage_from: Array<string>;
    half_damage_to: Array<string>;
    no_damage_from: Array<string>;
    no_damage_to: Array<string>;
}