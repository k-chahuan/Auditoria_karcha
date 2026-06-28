import React from "react";
import ReactMarkdown from "react-markdown";
import recuperacion from "../docs_karcha/08_recuperacion_karcha.md?raw";

function Recuperacion() {
  return (
    <div style={{ padding: "20px" }}>
      <ReactMarkdown>{recuperacion}</ReactMarkdown>
    </div>
  );
}

export default Recuperacion;