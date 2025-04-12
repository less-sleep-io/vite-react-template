import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import PageLayout from "~/components/PageLayout";
import PokemonList from "~/features/pokemon-list/PokemonList";
import { pokemonListQueryOptions } from "~/features/pokemon-list/api/pokemonListQueryOptions";

export const Route = createFileRoute("/pokemon/")({
  component: Pokemon,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(pokemonListQueryOptions),
});

function Pokemon() {
  const { data, isLoading } = useSuspenseQuery(pokemonListQueryOptions);

  return (
    <PageLayout>
      <PageLayout.Header>
        <PageLayout.Title>Pokemon</PageLayout.Title>
      </PageLayout.Header>
      <PageLayout.Content>
        <PokemonList isLoading={isLoading} pokemon={data.results} />
      </PageLayout.Content>
    </PageLayout>
  );
}
