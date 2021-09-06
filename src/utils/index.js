export const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export const pokemons = [
    {
      id: 10,
      name: "caterpie",
      types: [{ type: { name: "grass" } }],
      sprites: {
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg",
          },
        },
      },
    },
  ];

  export const morePokemonsButton = (
    <button data-testid="more-pokemons-button" className="buttonMorePokemon">
      GET MORE POKEMONS
    </button>
  );