import { queryOptions } from "@tanstack/react-query";

import { getPokemon } from "./getPokemon";

export const pokemonQueryOptions = (pokemonName: string) =>
  queryOptions({
    queryKey: ["pokemon", pokemonName],
    queryFn: () => getPokemon(pokemonName),
  });
