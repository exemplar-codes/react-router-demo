import { Link, Prompt, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Route path="/" exact>
        <h1>Home page</h1>
        <Link to="/welcome">Click</Link>
        <Prompt when={true} message={(location) => "Leave page?"} />
      </Route>
      <Route path="/welcome">
        <h1>Welcome</h1>
      </Route>
    </>
  );
}

export default App;
