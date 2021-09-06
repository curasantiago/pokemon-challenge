/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import rightArrow from "../../../assets/rightArrow.svg";
import leftArrow from "../../../assets/leftArrow.svg";
import './index.css'
import PokemonsViewDetail from "../../views/PokemonsViewDetail/PokemonsViewDetail";
import Loading from "../../utils/Loading/Loading";
import { BASE_URL } from "../../../utils";

const PokemonsDetailContainer = () => {

  function useQuery() {
    return new URLSearchParams(useLocation().search).get("id");
  }

  const [idPokemon] = useState(useQuery());
  const [pokemon, setPokemon] = useState();
  const [evolutionedPokemon, setEvolutionedPokemon] = useState();
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [species, setSpecies] = useState();
  const [evolutions, setEvolutions] = useState();

  const getPokemons = () => {
    return axios
    .get(`${BASE_URL}${idPokemon}`)
    .then((data) => {
      setPokemon(data.data);
      setCurrentPokemon(data.data);
      })
      .catch((err) => console.log(err));
  };

  const getSpecies = () => {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${idPokemon}/`)
      .then((species) => setSpecies(species))
      .catch((err) => console.log(err));
  };

  const getEvolutions = () => {
    if (species) {
      return axios
        .get(species.data.evolution_chain.url)
        .then((evolutions) => setEvolutions(evolutions))
        .catch((err) => console.log(err));
    }
  };

  const getEvolved = (evol, poke) => {
    if (evol && poke) {
      setLoading(false);
      if (evol.data.chain.evolves_to[0].species.name !== poke.name) {
        axios
          .get(`${BASE_URL}${evol.data.chain.evolves_to[0].species.name}`)
          .then((nextEvolution) => {
            if (nextEvolution.data.name !== poke.name) {
              setEvolutionedPokemon(nextEvolution.data);
            }
          })
          .catch((err) => console.log(err));
      }
    }
  };

  useEffect(() => {
    getPokemons();
    getSpecies();
  }, []);

  useEffect(() => {
    getEvolutions();
  }, [species]);

  useEffect(() => {
    if (evolutions && pokemon) {
      getEvolved(evolutions, pokemon);
    }
  }, [pokemon, evolutions]);

  const evolutionedButton = evolutionedPokemon ? (
    <img
      src={rightArrow}
      data-testid="right-arrow"
      alt="arrow"
      className="arrow"
      onClick={() => {
        setCurrentPokemon(evolutionedPokemon);
      }}
    />
  ) : (
    ""
  );

  const originalButton = (
    <img
      src={leftArrow}
      data-testid="left-arrow"
      alt="left-arrow"
      className="leftArrow"
      onClick={() => {
        setCurrentPokemon(pokemon);
      }}
    />
  );

  return !loading ? (
    <PokemonsViewDetail
      currentPokemon={currentPokemon}
      pokemon={pokemon}
      evolutionedButton={evolutionedButton}
      originalButton={originalButton}
    />
  ) : (
    <Loading />
  );
};

export default PokemonsDetailContainer;
