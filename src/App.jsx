import { useHistory, useLocation } from "react-router-dom";

export default function App() {
  const history = useHistory();
  const location = useLocation();

  const onClickHandler = () => {
    const qParamBuilder = new URLSearchParams();
    qParamBuilder.set("avatarEmoji", "😼");

    const updatedURL = location.pathname + "?" + qParamBuilder.toString();
    history.push(updatedURL);
  };

  return <button onClick={onClickHandler}>Sort asc</button>; // clicking will add '?sort=asc' to the URL
}
