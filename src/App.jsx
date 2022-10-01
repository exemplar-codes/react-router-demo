import { useEffect, useState } from "react";
import { Link, Prompt, Route } from "react-router-dom";

function App() {
  const [prompt, setPrompt] = useState(true);

  const time = 5000;
  useEffect(() => {
    setTimeout(() => setPrompt(false), time);
  }, []);

  return (
    <>
      <Route path="/" exact>
        <h1>Home page</h1>
        <Link to="/welcome">Click</Link>
        <br />
        <Prompt when={prompt} message={(location) => "Leave page?"} />
        {prompt
          ? `Working... ETA: ${time / 1000} seconds`
          : "You can leave the page"}
      </Route>
      <Route path="/welcome">
        <h1>Welcome page</h1>
      </Route>
    </>
  );
}

export default App;
