import './ContextSelector.css';

function ContextSelector({setContext}) {
  const contexts = [
    "The Lost City campaign is...",
    "The Curse of Strahd campaign is...",
    "The Temple of Elemental Evil campaign is..."
  ];

  const contextsJSX = contexts.map((context, index) => <div className="context" key={index} onClick={e => setContext(e.target.innerText)}>{ context }</div>)

  return (
    <div className="context-selector">
      <div className="context-wrapper">
        { contextsJSX }
      </div>
    </div>
  );
}

export default ContextSelector;