import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { getPokemonsWithAbilities } from "@/services/pokemonsService";
import { PokemonsList } from "@/components/PokemonList";
import { Pokemon } from "@/types/pokemon";
import { useState } from "react";
import { PokemonsForm } from "@/components/PokemonsForm";

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
  

  const handleSearch = (search: string) => {
    if(Boolean(search))
      getPokemonsWithAbilities(search).then((data) => {
      setPokemons(data);
      console.log("final data zak", data);
    });
  }

  return (
    <div className={geistSans.className}>
      <h1>Pokemons</h1>
        <PokemonsForm handleSearch={handleSearch} />
        <PokemonsList pokemons={pokemons} />
    </div>  
  );
}
