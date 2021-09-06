
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllPokemonsContainer from './components/containers/AllPokemonsContainer/AllPokemonsContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <AllPokemonsContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
