import { Route, useParams } from "react-router-dom";
function MyComponent2() {
  console.log(useParams(), MyComponent2.name);
  return null;
}

function MyComponent() {
  console.log(useParams(), MyComponent.name);
  return <MyComponent2 />;
}

function App() {
  return (
    <div>
      <Route path="/" exact>
        <h1>Products page</h1>
      </Route>
      <Route path="/:dParam">
        <MyComponent />
        Specific Product
      </Route>
    </div>
  );
}

export default App;
