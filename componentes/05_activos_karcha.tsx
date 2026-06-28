import React from "react";
import ReactMarkdown from "react-markdown";
import activos from "../docs_karcha/03_activos_karcha.md?raw";

function Activos() {
  return (
    <div style={{ padding: "20px" }}>
      <ReactMarkdown>{activos}</ReactMarkdown>
    </div>
  );
}

export default Activos;