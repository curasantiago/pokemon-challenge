/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import AllPokemonsView from "../../views/AllPokemonsView/AllPokemonsView";
import Loading from "../../utils/Loading/Loading";
import { BASE_URL } from "../../../utils";

const AllPokemonsContainer = () => {
  const [currentURL, setCurrentURL] = useState(BASE_URL);
  const [listOfPokemons, setListOfPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPokemonData = (url) => {
    axios
      .get(url)
      .then((pokemon) => {
        setCurrentURL(pokemon.data.next);
        setLoading(false);
        return pokemon.data.results;
      })
      .then((result) =>
        result.map(async (p) => {
          try {
            const { data } = await axios.get(p.url);
            setListOfPokemons((prev) => [...prev, data]);
          } catch (err) {
            console.log(err);
          }
        })
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPokemonData(BASE_URL);
  }, []);

  const morePokemonsButton = (
    <button
      data-testid="more-pokemons-button"
      onClick={() => getPokemonData(currentURL)}
      className="buttonMorePokemon"
    >
      GET MORE POKEMONS
    </button>
  );

  return !loading ? (
    <AllPokemonsView
      pokemons={listOfPokemons.sort((a, b) => a.id - b.id)}
      morePokemonsButton={morePokemonsButton}
    />
  ) : (
    <Loading />
  );
};

export default AllPokemonsContainer;
