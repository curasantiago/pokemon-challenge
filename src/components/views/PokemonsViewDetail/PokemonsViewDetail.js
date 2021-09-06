import { goBack } from "../../../utils";

const PokemonsViewDetail = ({
  currentPokemon,
  pokemon,
  evolutionedButton,
  originalButton,
  firstEvolutionName,
  secondEvolutionName,
  thirdEvolutionName
}) => {
  return (
    <div className="oficialWrapper" data-testid="pokemon-view-wrapper">
      {goBack}
      <div className="containerDetail" data-testid="container-detail">
        <div className={`wrapperDetail ${pokemon.types[0].type.name}`} data-testid="button-container">
           {thirdEvolutionName && thirdEvolutionName !== currentPokemon.name ? evolutionedButton : ''} 
           {/* Do not show the button in case that is the last evolution */}
           {!thirdEvolutionName && secondEvolutionName && secondEvolutionName !== currentPokemon.name ? evolutionedButton : ''}
           {/* Do not show the button in case that a third evolution doesn't exist */}
            {firstEvolutionName && firstEvolutionName === currentPokemon.name ? '' : originalButton}
            {/* If is the first pokemon, do not show the button to see the prev evolution */}
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
