import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route path="/alice">
        <h1>Alice</h1>
        <Route path="/alice/bob">
          {/* <!-- will be rendered on URL /alice/bob --> */}
          <h1>Alice/Bob</h1>
        </Route>
      </Route>
    </div>
  );
}

export default App;
