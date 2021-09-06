import { goBack } from "../../../utils";

const PokemonsViewDetail = ({
  currentPokemon,
  pokemon,
  evolutionedButton,
  originalButton,
}) => {
  return (
    <div className="oficialWrapper" data-testid="pokemon-view-wrapper">
      {goBack}
      <div className="containerDetail" data-testid="container-detail">
        <div className={`wrapperDetail ${currentPokemon.types[0].type.name}`} data-testid="button-container">
          {currentPokemon.name === pokemon.name
            ? evolutionedButton
            : originalButton}
          <div className="pokemon-container" data-testid="pokemon-container">
            <h2>{currentPokemon.name}</h2>
            <div className="imageContainerDetail">
              <img
                src={currentPokemon.sprites.other.dream_world.front_default}
                alt="pokemon"
                data-testid="pokemon-img"
              />
            </div>
          </div>
          <div className="experienceContainer" data-testid="experience-container">
            <p>EXPERIENCE: {currentPokemon.base_experience}</p>
            <p className="height">HEIGHT: {currentPokemon.height}</p>
            <div className="ulAbility">
              <span>ABILITIES:</span>
              <ul>
                {currentPokemon.abilities.map((ability, i) => (
                  <li key={`ability-${i}`}>{ability.ability.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonsViewDetail;
