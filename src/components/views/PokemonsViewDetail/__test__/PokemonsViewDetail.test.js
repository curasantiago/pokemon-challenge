import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { evolutionedButton, originalButton, pokemon, pokemon1, pokemons } from "../../../../utils";
import DetailPokemonsView from "../PokemonsViewDetail";


describe("Pokemon View Container", () => {
  it("should display the POKEMON wrapper and view container", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <DetailPokemonsView currentPokemon={pokemon} pokemon={pokemon} />
      </BrowserRouter>
    );
    let containerDetail = getByTestId("container-detail");
    expect(containerDetail).toBeDefined();
    let wrapperDetail = getByTestId("pokemon-view-wrapper")
    expect(wrapperDetail).toBeDefined();
  });

  it("should display the POKEMON containers, title and images", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <DetailPokemonsView currentPokemon={pokemon} pokemon={pokemon} />
      </BrowserRouter>
    );
    let buttonContainer = getByTestId("button-container");
    let pokemonContainer = getByTestId("pokemon-container")
    let pokemonImg = getByTestId("pokemon-img");
    let experienceContainer = getByTestId("experience-container");
    expect(buttonContainer).toBeDefined();
    expect(pokemonContainer).toBeDefined();
    expect(pokemonImg).toBeDefined();
    expect(experienceContainer).toBeDefined();
  });
  

  it("should display the left arrow img", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <DetailPokemonsView
          currentPokemon={pokemon}
          pokemon={pokemon1}
          evolutionedButton={evolutionedButton}
          originalButton={originalButton}
        />
      </BrowserRouter>
    );

    const leftArrow = getByTestId("left-arrow");
    expect(leftArrow).toBeDefined();
  });

  it("should display the right arrow img", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <DetailPokemonsView
          currentPokemon={pokemon}
          pokemon={pokemon}
          evolutionedButton={evolutionedButton}
          originalButton={originalButton}
        />
      </BrowserRouter>
    );

    const rightArrow = getByTestId("right-arrow");
    expect(rightArrow).toBeDefined();
  });
});
