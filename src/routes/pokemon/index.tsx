import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import PokemonList, { pokemonListQueryOptions } from "~/features/pokemon-list";

const PokemonComponent = () => {
  const { data, isLoading } = useSuspenseQuery(pokemonListQueryOptions);

  return <PokemonList isLoading={isLoading} pokemon={data.results} />;
};

export const Route = createFileRoute("/pokemon/")({
  component: PokemonComponent,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(pokemonListQueryOptions),
});
