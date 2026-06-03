import { useState } from "react";

export function PokemonsForm({ handleSearch }: { handleSearch: (search: string) => void }) {
    const [search, setSearch] = useState("");
    return(
    <>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(search) => setSearch(search.target.value)}
        />
        <button onClick={() => handleSearch(search)}>Search</button>
    </> 
);
}