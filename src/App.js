import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RotateMenu from "./component/RotateMenu";
import TicTacToe from "./ticTacToe/TicTacToe";
import Race from "./race/Race";

export const gameNames = ["ticTacToe", "race", "2", "2", "2", "2"];

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <RotateMenu />
        </Route>
        <Route path="/ticTacToe">
          <TicTacToe />
        </Route>
        <Route path="/race">
          <Race />
        </Route>
      </Switch>
      {/* <Redirect to="/menu"></Redirect> */}
    </Router>
  );
}

export default App;
