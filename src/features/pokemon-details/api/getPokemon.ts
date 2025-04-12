import { api } from "~/lib/apiClient";
import { PokemonType, pokemonSchema } from "~/types/shared.types";

export const getPokemon = async (pokemonName: string) => {
  await new Promise((r) => setTimeout(r, 500));

  return api
    .get<PokemonType>(`/pokemon/${pokemonName}`)
    .then((r) => pokemonSchema.parse(r));
};
