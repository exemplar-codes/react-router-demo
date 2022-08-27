import { BrowserRouter, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </BrowserRouter>
  );
}

// '/welcome' => component A
// '/contact' => component B
export default App;
