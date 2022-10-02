import { Route, useRouteMatch } from "react-router-dom";

function App() {
  return (
    <Route path="/welcome">
      <Child />
    </Route>
  );
}

function Child() {
  const match = useRouteMatch();

  return <h1>Previous route: {match.url}</h1>;
}

export default App;
