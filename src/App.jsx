import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/alice">
          <h1>Alice</h1>
        </Route>
        <Route path="/alice/bob">
          <h1>Alice/Bob</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
