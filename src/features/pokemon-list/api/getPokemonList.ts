import { z } from "zod";

import { api } from "~/lib/apiClient";

export const pokemonListSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(
    z.object({
      name: z.string(),
      url: z.string(),
    }),
  ),
});

export type PokemonListType = typeof pokemonListSchema;

export const getPokemonList = async () => {
  await new Promise((r) => setTimeout(r, 500));

  return api
    .get<PokemonListType>("/pokemon")
    .then((r) => pokemonListSchema.parse(r));
};
