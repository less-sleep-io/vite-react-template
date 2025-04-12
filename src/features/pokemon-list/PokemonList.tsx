import { Link } from "@tanstack/react-router";

import Button from "~/components/Button";
import Loading from "~/components/Loading/Loading";
import ViewLayout from "~/components/ViewLayout";

function PokemonList({
  isLoading,
  pokemon,
}: {
  isLoading: boolean;
  pokemon: { name: string }[];
}) {
  if (isLoading) {
    return <Loading />;
  }

  return (
    <ViewLayout>
      <ViewLayout.Header>
        <ViewLayout.Title>Pokemon</ViewLayout.Title>
      </ViewLayout.Header>
      <ViewLayout.Content>
        <div className="flex w-full justify-center">
          <div className="flex w-full max-w-md flex-col">
            <ul className="flex flex-col gap-1">
              {pokemon.map(({ name }) => {
                return (
                  <li
                    className="grid grid-cols-2 items-center gap-4 px-4 py-1"
                    key={name}
                  >
                    <span className="text-medium text-neutral-300">{name}</span>
                    <Button asChild={true} size="small" variant="contained">
                      <Link
                        params={{ pokemonName: name }}
                        to="/pokemon/$pokemonName"
                      >
                        View
                      </Link>
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </ViewLayout.Content>
    </ViewLayout>
  );
}

export default PokemonList;
