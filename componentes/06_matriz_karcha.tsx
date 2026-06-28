import React from "react";
import ReactMarkdown from "react-markdown";
import matriz from "../docs_karcha/06_matriz_karcha.md?raw";

function Matriz() {
  return (
    <div style={{ padding: "20px" }}>
      <ReactMarkdown>{matriz}</ReactMarkdown>
    </div>
  );
}

export default Matriz;