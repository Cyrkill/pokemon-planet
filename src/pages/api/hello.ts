// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { useState } from "react";

// TODO: Définir le type pour ta liste de Pokémons
type Pokemon = {
  name: string;
  id: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

   const { search } = req.query;

  try {
    
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + (search ? `${search}` : ""));
    const data = await response.json();

    let results;
    if(data.results) 
      results = data.results;
    else results = [data]
    console.log(data);

    res.status(200).json({ pokemons: results });
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}
