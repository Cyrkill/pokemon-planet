import { Pokemon } from "@/types/pokemon";

export interface PokemonsListProps {
    pokemons: Pokemon[];
}

export function PokemonsList({pokemons}: PokemonsListProps) {
    if(!pokemons || pokemons.length === 0) {
        return <p>No pokemons found</p>;
    }
    return (
        <ul>
          {pokemons?.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
        </ul>
    );
} 