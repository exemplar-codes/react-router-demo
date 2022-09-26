import { Link, Prompt } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="welcome">Click</Link>
      <Prompt when={true} message={(location) => "Leave page?"} />
    </>
  );
}

export default App;
