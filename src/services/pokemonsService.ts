import { Pokemon } from "@/types/pokemon";

export interface PokemonWithoutAbilities    {
    name: string;
    id: number;
}
export async function fetchPokemons(name: string): Promise<PokemonWithoutAbilities[]> {
    const query = name ? `?search=${name}` : "";
    try {
        const response = await fetch(`/api/pokemons${query}`);
        const data = await response.json();
        return data.pokemons;
    } catch (error) {
        console.error("Error fetching pokemons:", error);
        return [];
    }
}

export async function getPokemonAbilities(pokemonId: number): Promise<Pokemon["abilities"]> {
    try {
        const response = await fetch(`/api/abilities?id=${pokemonId}`);
        const data = await response.json();
        return data.abilities;
    } catch (error) {
        console.error("Error fetching abilities:", error);
        return [];
    }
}


export async function getPokemonsWithAbilities(name:string): Promise<Pokemon[]> {
    const pokemonsWithoutAbilities = await fetchPokemons(name);
    const abilities = await Promise.all(pokemonsWithoutAbilities.map((pokemon) => getPokemonAbilities(pokemon.id)));
    console.log(abilities);
    return pokemonsWithoutAbilities.map((pokemon, index) => ({
        name: pokemon.name,
        id: pokemon.id,
        abilities: abilities[index],
    }));

}

