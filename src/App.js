import React, { useRef } from "react";
import Form from "./Form.js";
import "./styles.css";

export default function App() {
  const form = useRef();

  function handleRestart() {
    form.current.clear();
  }

  return (
    <div id="app">
      <button onClick={handleRestart}>Restart</button>
      <Form ref={form} />
    </div>
  );
}
