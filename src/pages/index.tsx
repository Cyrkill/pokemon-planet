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
  const [search, setSearch] = useState("");

  useEffect(() => {
    const query = search ? `?search=${search}` : "";
    fetch(`/api/hello${query}`)
      .then((res) => res.json())
      .then((data) => setPokemons(data.pokemons))
      .catch((err) => console.error(err));
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
          }
          }
        />
        <ul>
          {pokemons?.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
        </ul>
    </div>  
  );
}
