import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import { getPokemonsWithAbilities } from "@/services/pokemonsService";

type Pokemon = {
  name: string;
  id: number;
  abilities: Ability[];
};

type Ability = {
  is_hidden: boolean;
  slot: number;
  ability: AbilityDetail[];
};

type AbilityDetail = {
  name: string;
  url: string;
};


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const query = search ? `?search=${search}` : "";
    getPokemonsWithAbilities(search).then((data) => {
      setPokemons(data);
    });
  }, [search]);



  return (
    <div className={geistSans.className}>
      <h1>Pokemons</h1>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(search) => {
            if(Boolean(search)) 
              setSearch(search.target.value)
            }}
        />
        <button onClick={handleSearch}>Search</button>
        <ul>
          {pokemons?.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
        </ul>
    </div>  
  );
}
