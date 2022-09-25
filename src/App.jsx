import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route path="/products">
        <h1>Products page</h1>
      </Route>
      <Route path="/products/:id">Specific Product</Route>
    </div>
  );
}

export default App;
