import { useState } from "react";
import './Editor.css';

function Editor({context, setContext}) {
  const [generation, setGeneration] = useState("")

  function fetchGeneration() {
    fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({ context }),
      headers: {
        "accepts": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => setGeneration(data.generation))
  }

  return (
    <div className="editor">
      <textarea type="text" value={ context } onChange={e => setContext(e.target.value)}/>
      <button onClick={() => fetchGeneration()}>Submit</button>
      <p>{ generation }</p>
    </div>
  );
}

export default Editor;