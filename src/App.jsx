import { BrowserRouter, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";

const Routes = { "/welcome": Welcome, "/products": Products };

function App() {
  return (
    <BrowserRouter>
      {Object.entries(Routes).map(([route, component]) => (
        <Route key={route} path={route}>
          {component()}
        </Route>
      ))}
      {/* <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route> */}
    </BrowserRouter>
  );
}

// '/welcome' => component A
// '/contact' => component B
export default App;
