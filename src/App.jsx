import { Route, useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  const goToWelcome = () => history.push("welcome");
  const goHome = () => history.push("/");

  return (
    <>
      <Route path="/" exact>
        <button onClick={goToWelcome}>Go to Welcome</button>
      </Route>
      <Route path="/welcome">
        <h1>Welcome Page</h1>
        <button onClick={goHome}>Go Home</button>
      </Route>
    </>
  );
}

export default App;
