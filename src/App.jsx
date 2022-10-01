import { useLocation } from "react-router-dom";

// URI: ?age=2
export default function App() {
  const location = useLocation();

  const qparams = new URLSearchParams(location.search);

  const age = qparams.get("age");

  return <h1>Age: {age}</h1>;
}
