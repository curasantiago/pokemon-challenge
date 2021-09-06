import { Link } from "react-router-dom";
import './index.css';

const AllPokemonsView = ({ pokemons, morePokemonsButton }) => {

  return (
    <div className="container" data-testid="container">
      <h1 data-testid="pokemons-title">POKEMONS</h1>

      <div className="pokemonsView" data-testid="pokemonsView">
        {pokemons.map((pokemon, i) => (
          <div
            className={`pokemon ${pokemon.types[0].type.name}`}
            data-testid={`pokemon-${i}`}
            key={`${pokemon.name}-${i}`}
          >
            <Link to={`/idPokemon?id=${pokemon.id}`}>
              <h2 data-testid="pokemon-name">{pokemon.name}</h2>
              <div className="img-container">
                <img
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt="pokemon"
                  data-testid="pokemon-img"
                />
              </div>
            </Link>
          </div>
        ))}
        
      </div>
        {morePokemonsButton}
    </div>
  );
};

export default AllPokemonsView;
