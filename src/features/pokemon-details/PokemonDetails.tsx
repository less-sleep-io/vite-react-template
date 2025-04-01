import { capitalize } from "radash";

import Loading from "~/components/Loading/Loading";

import { PokemonType } from "./api/getPokemon";

const PokemonDetails = ({
  isLoading,
  pokemon,
}: {
  isLoading: boolean;
  pokemon?: PokemonType;
}) => {
  if (isLoading) {
    return <Loading />;
  }

  if (pokemon) {
    return (
      <div>
        <table>
          <tbody>
            {[
              {
                label: "Species",
                value: capitalize(pokemon.species.name),
              },
              {
                label: "Height",
                value: pokemon.height,
              },
              {
                label: "Weight",
                value: pokemon.weight,
              },
            ].map(({ label, value }) => {
              return (
                <tr>
                  <th className="py-2 pr-1 text-neutral-300">{label}:</th>
                  <td className="py-2 pl-1 text-neutral-300">{value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default PokemonDetails;
