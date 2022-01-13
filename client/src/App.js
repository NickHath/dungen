import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [generation, setGeneration] = useState("")

  function fetchGeneration() {
    fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: {
        "accepts": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => setGeneration(data.generation))
  }

  return (
    <div className="App">
        <input type="text" value={ text } onChange={e => setText(e.target.value)}/>
        <button onClick={() => fetchGeneration()}>Submit</button>
        <p>{ generation }</p>
    </div>
  );
}

export default App;