import { z } from "zod";

import mapKeysToCamelCase from "~/utils/mapKeysToCamelCase";

export const pokemonSchema = z
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
    sprites: z.object({
      front_default: z.string().url(),
      other: z.object({
        dream_world: z.object({
          front_default: z.string().url(),
        }),
      }),
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
