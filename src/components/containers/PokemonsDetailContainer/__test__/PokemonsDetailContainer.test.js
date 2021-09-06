import { render, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import axiosMock from "axios";
import DetailPokemonsContainer from "../PokemonsDetailContainer";

jest.mock("axios");

describe("Should render Pokemons Container", () => {
  it("should be loading before display data", async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <DetailPokemonsContainer />
      </BrowserRouter>
    );
    let loading = await waitFor(() => getByTestId("loading"));
    expect(loading).toBeDefined();
  });

  it("the api should be call twice", async () => {
    render(
      <BrowserRouter>
        <DetailPokemonsContainer />
      </BrowserRouter>
    );

    expect(axiosMock.get).toHaveBeenCalledTimes(2);
  });
});
