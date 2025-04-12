import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import PokemonList from "~/features/pokemon-list/PokemonList";
import { pokemonListQueryOptions } from "~/features/pokemon-list/api/pokemonListQueryOptions";

export const Route = createFileRoute("/pokemon/")({
  component: Pokemon,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(pokemonListQueryOptions),
});

function Pokemon() {
  const { data, isLoading } = useSuspenseQuery(pokemonListQueryOptions);

  return <PokemonList isLoading={isLoading} pokemon={data.results} />;
}
