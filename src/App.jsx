import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route path="/alice">
        <h1>Alice rendered</h1>
      </Route>
      <Route path="/alice/bob">
        <h1>Alice/Bob rendered</h1>
      </Route>
    </div>
  );
}

export default App;
