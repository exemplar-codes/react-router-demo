import { BrowserRouter, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <BrowserRouter>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </BrowserRouter>
    </div>
  );
}

// '/welcome' => component A
// '/contact' => component B
export default App;
