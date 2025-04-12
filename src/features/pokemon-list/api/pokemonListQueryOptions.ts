import { queryOptions } from "@tanstack/react-query";

import { getPokemonList } from "./getPokemonList";

export const pokemonListQueryOptions = queryOptions({
  queryKey: ["pokemon"],
  queryFn: () => getPokemonList(),
});
