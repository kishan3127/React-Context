import { useContext } from "react";
import UserContext from "./context/userContext";
import OtherComponent from "./OtherComponent";

function Child() {
  const user = useContext(UserContext);

  return (
    <p>
      {user} <OtherComponent />
    </p>
  );
}

export default Child;
