import React from "react";
import "./App.css";

import ClassCounterOne from "./components/ClassCounterOne";
import HookCounterOne from "./components/HookCounterOne";

import ClassMouse from "./components/ClassMouse";
import HookMouse from "./components/HookMouse";

function App() {
  return (
    <div className="App">
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}

      {/* <ClassMouse /> */}
      <HookMouse />
    </div>
  );
}

export default App;
