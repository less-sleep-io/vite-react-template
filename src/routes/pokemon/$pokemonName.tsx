import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import PokemonDetails from "~/features/pokemon-details/PokemonDetails";
import { pokemonQueryOptions } from "~/features/pokemon-details/api/pokemonQueryOptions";

export const Route = createFileRoute("/pokemon/$pokemonName")({
  component: Pokemon,
  loader: ({ context: { queryClient }, params: { pokemonName } }) =>
    queryClient.ensureQueryData(pokemonQueryOptions(pokemonName)),
});

function Pokemon() {
  const pokemonName = Route.useParams().pokemonName;
  const { data, isLoading } = useSuspenseQuery(
    pokemonQueryOptions(pokemonName),
  );

  return <PokemonDetails isLoading={isLoading} pokemon={data} />;
}
