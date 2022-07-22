import { PokemonDamageRelations } from "../models/randomPokemon-model";
import getDamageRelationsName from "./getDamageRelationsName";

const getDamageRelations = async (moveName: string) => {
    const data = await fetch(`https://pokeapi.co/api/v2/type/${moveName}`);
    const response = await data.json();
    const damageRelation: PokemonDamageRelations = {
        double_damage_from: getDamageRelationsName(response.damage_relations.double_damage_from),
        double_damage_to: getDamageRelationsName(response.damage_relations.double_damage_to),
        half_damage_from: getDamageRelationsName(response.damage_relations.half_damage_from),
        half_damage_to: getDamageRelationsName(response.damage_relations.half_damage_to),
        no_damage_from: getDamageRelationsName(response.damage_relations.no_damage_from),
        no_damage_to: getDamageRelationsName(response.damage_relations.no_damage_to),
    };
    return damageRelation;
};

export default getDamageRelations;