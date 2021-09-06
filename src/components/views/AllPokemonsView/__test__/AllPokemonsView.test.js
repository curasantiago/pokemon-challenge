import { render, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AllPokemonsView from "../AllPokemonsView";
import { morePokemonsButton, pokemons } from "../../../../utils";

describe("Pokemon View Container", () => {
  it("should display the POKEMON view container and the title", async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <AllPokemonsView
          pokemons={pokemons}
          morePokemonsButton={morePokemonsButton}
        />
      </BrowserRouter>
    );
    let container = await waitFor(() => getByTestId("container"));
    expect(container).toBeDefined();
    let title = await waitFor(() => getByTestId("pokemons-title"));
    expect(title).toBeDefined();
  });

  it("should display the POKEMON view", async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <AllPokemonsView
          pokemons={pokemons}
          morePokemonsButton={morePokemonsButton}
        />
      </BrowserRouter>
    );
    let pokemonsView = await waitFor(() => getByTestId("pokemonsView"));
    expect(pokemonsView).toBeDefined();
  });

  it("should display one Pokemon, the title and image", async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <AllPokemonsView
          pokemons={pokemons}
          morePokemonsButton={morePokemonsButton}
        />
      </BrowserRouter>
    );
    let pokemon = getByTestId("pokemon-0");
    let pokemonName = getByTestId("pokemon-name");
    let pokemonImage = getByTestId("pokemon-img");
    expect(pokemon).toBeDefined();
    expect(pokemonName).toBeDefined();
    expect(pokemonImage).toBeDefined();
  });

  it("The Button GET MORE POKEMONS should be defined", async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <AllPokemonsView
          pokemons={pokemons}
          morePokemonsButton={morePokemonsButton}
        />
      </BrowserRouter>
    );
    let button = getByTestId("more-pokemons-button");
    expect(button).toBeDefined();
  });
});
