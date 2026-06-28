import React from "react";
import ReactMarkdown from "react-markdown";
import promts from "../docs_karcha/09_promts_karcha.md?raw";

function Promts() {
  return (
    <div style={{ padding: "20px" }}>
      <ReactMarkdown>{promts}</ReactMarkdown>
    </div>
  );
}

export default Promts;