
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllPokemonsContainer from './components/containers/AllPokemonsContainer/AllPokemonsContainer';
import PokemonsDetailContainer from "./components/containers/PokemonsDetailContainer/PokemonsDetailContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <AllPokemonsContainer />
          </Route>
          <Route path={`/idPokemon`}>
            <PokemonsDetailContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
