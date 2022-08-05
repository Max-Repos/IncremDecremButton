import React from "react";
import { useState } from "react/cjs/react.production.min";
import "./App.css";

const App = () => {
    
    const [num, setNum] = useState(0);
    
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> {num} </h1>
          <div className="btn_div">
            <button>Increm</button>
            <button>Decrem</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
