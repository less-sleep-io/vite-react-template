import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import PokemonDetails, {
  pokemonQueryOptions,
} from "~/features/pokemon-details";

const PokemonConponent = () => {
  const pokemonName = Route.useParams().pokemonName;
  const { data, isLoading } = useSuspenseQuery(
    pokemonQueryOptions(pokemonName),
  );

  return <PokemonDetails isLoading={isLoading} pokemon={data} />;
};

export const Route = createFileRoute("/pokemon/$pokemonName")({
  component: PokemonConponent,
  loader: ({ context: { queryClient }, params: { pokemonName } }) =>
    queryClient.ensureQueryData(pokemonQueryOptions(pokemonName)),
});
