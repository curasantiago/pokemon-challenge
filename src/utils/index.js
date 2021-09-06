import { Link } from "react-router-dom";
import leftArrow from "../assets/leftArrow.svg";

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

export const pokemon = {
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
  abilities: [{ ability: { name: "tackle" } }],
};

export const pokemon1 = {
  id: 10,
  name: "bulbasaur",
  types: [{ type: { name: "grass" } }],
  sprites: {
    other: {
      dream_world: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg",
      },
    },
  },
  abilities: [{ ability: { name: "tackle" } }],
};

export const morePokemonsButton = (
  <button data-testid="more-pokemons-button" className="buttonMorePokemon">
    GET MORE POKEMONS
  </button>
);

export const goBack = (
  <Link to="/">
    <img
      src={leftArrow}
      alt="left-arrow"
      className="goBack"
      data-testid="goback-img"
    />
  </Link>
);

export const originalButton = (
  <img src="" data-testid="left-arrow" alt="left-arrow" className="leftArrow" />
);

export const evolutionedButton = (
  <img src="" data-testid="right-arrow" alt="arrow" className="arrow" />
);


export const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
