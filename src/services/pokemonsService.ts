import { Ability, Pokemon } from "@/types/pokemon";

export interface PokemonWithoutAbilities    {
    name: string;
    id: number;
}
export async function fetchPokemons(name: string): Promise<PokemonWithoutAbilities[]> {

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        if(Array.isArray(data))
            return data;
        else return [data];
    } catch (error) {
        console.error("Error fetching pokemons:", error);
        return [];
    }
}

export async function getPokemonAbilities(pokemonId: number): Promise<Ability[]> {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/ability/${pokemonId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching abilities:", error);
        return [];
    }
}


export async function getPokemonsWithAbilities(name:string){
    const pokemonsWithoutAbilities = await fetchPokemons(name);
    console.log(pokemonsWithoutAbilities);
    const abilities = await Promise.all(pokemonsWithoutAbilities.map((pokemon) => getPokemonAbilities(pokemon.id)));
    console.log(abilities);
    return pokemonsWithoutAbilities.map((pokemon, index) => ({
        name: pokemon.name,
        id: pokemon.id,
        abilities: abilities[index],
    }));

}

