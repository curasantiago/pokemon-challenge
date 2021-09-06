import { render, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import axiosMock from "axios";
import AllPokemonsContainer from "../AllPokemonsContainer";

jest.mock("axios");

describe("Should render Pokemons Container", () => {
  it("should be loading before display data", async () => {
    axiosMock.get.mockResolvedValueOnce();

    const { getByTestId } = render(
      <BrowserRouter>
        <AllPokemonsContainer />
      </BrowserRouter>
    );

    let loading = await waitFor(() => getByTestId("loading"));
    expect(loading).toBeDefined();
  });

  it("should call the api one time", () => {
    axiosMock.get.mockResolvedValueOnce();

    render(
      <BrowserRouter>
        <AllPokemonsContainer />
      </BrowserRouter>
    );
    expect(axiosMock.get).toBeCalledTimes(1);
  });
});
