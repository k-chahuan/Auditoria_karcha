import React from "react";
import ReactMarkdown from "react-markdown";
import controles from "../docs_karcha/07_controles_karcha.md?raw";

function Controles() {
  return (
    <div style={{ padding: "20px" }}>
      <ReactMarkdown>{controles}</ReactMarkdown>
    </div>
  );
}

export default Controles;