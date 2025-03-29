import { z } from "zod";

import { api } from "~/lib/apiClient";
import mapKeysToCamelCase from "~/utils/mapKeysToCamelCase";

const pokemonSchema = z
  .object({
    base_experience: z.number(),
    forms: z.array(
      z.object({
        name: z.string(),
        url: z.string().url(),
      }),
    ),
    height: z.number(),
    id: z.number().transform((val) => val.toString()),
    name: z.string(),
    order: z.number(),
    species: z.object({
      name: z.string(),
      url: z.string().url(),
    }),
    types: z.array(
      z.object({
        slot: z.number(),
        type: z.object({
          name: z.string(),
          url: z.string().url(),
        }),
      }),
    ),
    weight: z.number(),
  })
  .transform((data) => {
    return mapKeysToCamelCase(data);
  });

export type PokemonType = z.infer<typeof pokemonSchema>;

export const getPokemon = async (pokemonName: string) => {
  await new Promise((r) => setTimeout(r, 500));

  return api
    .get<PokemonType>(`/pokemon/${pokemonName}`)
    .then((r) => pokemonSchema.parse(r));
};
