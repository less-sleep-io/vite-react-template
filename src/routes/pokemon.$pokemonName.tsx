import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { capitalize } from "radash";

import PageLayout from "~/components/PageLayout";
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

  return (
    <PageLayout>
      <PageLayout.Header>
        <PageLayout.Title>{capitalize(pokemonName)}</PageLayout.Title>
      </PageLayout.Header>
      <PageLayout.Content>
        <PokemonDetails isLoading={isLoading} pokemon={data} />
      </PageLayout.Content>
    </PageLayout>
  );
}
