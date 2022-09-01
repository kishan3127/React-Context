import { useContext } from "react";
import UserContext from "./context/userContext";
function OtherComponent() {
  const count = useContext(UserContext);

  return <p>{count * 10}</p>;
}

export default OtherComponent;
