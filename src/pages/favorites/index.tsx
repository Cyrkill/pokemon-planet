import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";

type Pokemon = {
  name: string;
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

  return (
    <div className={geistSans.className}>
      <h1>Pokemons</h1>
        <ul>
          {pokemons?.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
        </ul>
    </div>  
  );
}
