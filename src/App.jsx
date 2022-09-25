import { Redirect, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path="/login">Login page</Route>
    </div>
  );
}

export default App;
