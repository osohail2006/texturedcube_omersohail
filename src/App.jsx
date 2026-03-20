import { useState } from "react";
import "./index.css"; // CRITICAL: This must be here
import Cube from "./ThreeJsSetup/Cube";
import TexturedCube from "./ThreeJsSetup/TexturedCube";

function App() {
  const [view, setView] = useState("cube");

  return (
    <div className="app-layout">
      {/* LEFT SIDEBAR MENU */}
      <aside className="sidebar">
        <div className="identity-header">
          <h1>Student ID: B23110006135</h1>
          <p>Omer Sohail</p>
          <p>UBIT Karachi</p>
        </div>
        
        <nav className="control-pane">
          <button 
            className="control-btn btn-simple" 
            onClick={() => setView("cube")}
          >
            VIRTUAL CUBE (PURPLE)
          </button>
          
          <button 
            className="control-btn btn-textured" 
            onClick={() => setView("textured")}
          >
            TEXTURED CUBE (GOLD)
          </button>
        </nav>
      </aside>

      {/* RIGHT DISPLAY STAGE */}
      <main className="main-stage">
        <div id="canvas-container">
          {view === "cube" && <Cube />}
          {view === "textured" && <TexturedCube />}
        </div>
      </main>
    </div>
  );
}

export default App;
