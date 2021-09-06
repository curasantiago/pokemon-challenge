/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import rightArrow from "../../../assets/rightArrow.svg";
import leftArrow from "../../../assets/leftArrow.svg";
import "./index.css";
import PokemonsViewDetail from "../../views/PokemonsViewDetail/PokemonsViewDetail";
import Loading from "../../utils/Loading/Loading";
import { BASE_URL } from "../../../utils";

const PokemonsDetailContainer = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search).get("id");
  }

  const [idPokemon] = useState(useQuery());
  const [pokemon, setPokemon] = useState();
  const [currentPokemon, setCurrentPokemon] = useState();
  const [loading, setLoading] = useState(true);
  const [species, setSpecies] = useState();
  const [evolutions, setEvolutions] = useState();
  const [firstPokemon, setFirstPokemon] = useState();
  const [secondPokemon, setSecondPokemon] = useState();
  const [thirdPokemon, setThirdPokemon] = useState();

  const getPokemons = async () => {
    try {
      const data = await axios
        .get(`${BASE_URL}${idPokemon}`);
      setPokemon(data.data);
      setCurrentPokemon(data.data);
    } catch (err) {
      return console.log(err);
    }
  };

  const getSpecies = async () => {
    try {
      const species = await axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${idPokemon}/`);
      return setSpecies(species);
    } catch (err) {
      return console.log(err);
    }
  };

  const getEvolutions = async () => {
    if (species) {
      try {
        const evolutions = await axios
          .get(species.data.evolution_chain.url);
        return setEvolutions(evolutions);
      } catch (err) {
        return console.log(err);
      }
    }
  };

  const getEvolutionChain = async () => {
    if (evolutions) {
      setLoading(false);
      try {
        const data = await axios.get(
          `${BASE_URL}${evolutions.data.chain.species.name}`
        );
        setFirstPokemon(data);
      } catch(err) {
        console.log(err);
      }
      if (evolutions.data.chain.evolves_to[0].species.url) {
        try {
          const data = await axios.get(
            `${BASE_URL}${evolutions.data.chain.evolves_to[0].species.name}`
          );
          setSecondPokemon(data);
        } catch (err) {
          console.log(err);
        }
      }
      if (evolutions.data.chain.evolves_to[0].evolves_to[0]) {
        try {
          const data = await axios.get(
            `${BASE_URL}${evolutions.data.chain.evolves_to[0].evolves_to[0].species.name}`
          );
          setThirdPokemon(data);
        } catch (err) {
          console.log(err);
        }
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
    if (evolutions) {
      getEvolutionChain();
    }
  }, [evolutions]);

  const evolutionedButton = secondPokemon ? (
    <img
      src={rightArrow}
      data-testid="right-arrow"
      alt="arrow"
      className="arrow"
      onClick={() => {
        if (thirdPokemon && secondPokemon.data.name === currentPokemon.name) {
          setCurrentPokemon(thirdPokemon.data);
        } else if (
          secondPokemon &&
          firstPokemon.data.name === currentPokemon.name
        ) {
          setCurrentPokemon(secondPokemon.data);
        }
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
        if (thirdPokemon && currentPokemon.name === thirdPokemon.data.name) {
          setCurrentPokemon(secondPokemon.data);
        }
        if (secondPokemon && currentPokemon.name === secondPokemon.data.name) {
          setCurrentPokemon(firstPokemon.data);
        }
      }}
    />
  );

  return !loading ? (
    <PokemonsViewDetail
      currentPokemon={currentPokemon}
      pokemon={pokemon}
      evolutionedButton={evolutionedButton}
      originalButton={originalButton}
      firstEvolutionName={firstPokemon && firstPokemon.data.name}
      secondEvolutionName={secondPokemon && secondPokemon.data.name}
      thirdEvolutionName={thirdPokemon && thirdPokemon.data.name}
    />
  ) : (
    <Loading />
  );
};

export default PokemonsDetailContainer;
