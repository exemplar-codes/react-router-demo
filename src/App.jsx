import { Route, useRouteMatch } from "react-router-dom";

function App() {
  return (
    <Route path="/welcome" exact>
      <Child />
    </Route>
  );
}

function Child() {
  const match = useRouteMatch();
  console.log(match);

  return <h1>Previous route: {match.url}</h1>;
}

export default App;
