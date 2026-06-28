import React from "react";
import ReactMarkdown from "react-markdown";
import comandos from "../docs_karcha/02_comandos_karcha.md?raw";

function Comandos() {
  return (
    <div style={{ padding: "20px" }}>
      <ReactMarkdown>{comandos}</ReactMarkdown>
    </div>
  );
}

export default Comandos;