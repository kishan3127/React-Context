import Child from "./child";
import "./styles.css";
import UserContext from "./context/userContext";

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <UserContext.Provider value={count}>
        <h1>Hello CodeSandbox</h1>
        <Child />
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={() => setCount(count + 1)}>Change</button>
      </UserContext.Provider>
    </div>
  );
}
