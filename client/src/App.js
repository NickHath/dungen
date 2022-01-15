import { useState } from "react";
import "./App.css";
import NavBar from './components/NavBar';
import ContextSelector from './components/ContextSelector';
import Editor from './components/Editor';

function App() {
  const [context, setContext] = useState("");

  return (
    <div className="app">
      <NavBar />
      <div className="context-editor-wrapper">
        <ContextSelector setContext={setContext} />
        <Editor context={context} setContext={setContext} />
      </div>

    </div>
  );
}

export default App;