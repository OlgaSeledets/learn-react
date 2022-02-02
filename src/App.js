import React, {useState} from "react";
import Counter from "./components/Counter";

function App() {
  const [value, setValue] = useState('inputs text')

  return (
    <div className="App">
      <h1>{value}</h1>
      <input type="text" value={value} onChange={event => setValue(event.target.value)}></input>
      <Counter/>
    </div>
  );
}

export default App;
