// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPokemonsWithAbilities } from "@/services/pokemonsService";
import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

   const { search } = req.query;

  try {

    const pokemonsWithAbilities = await getPokemonsWithAbilities(search as string);

    res.status(200).json({ pokemons: pokemonsWithAbilities });
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}
