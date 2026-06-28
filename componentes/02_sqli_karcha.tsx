import React from "react";
import ReactMarkdown from "react-markdown";
import sqli from "../docs_karcha/02_sqli_karcha.md?raw";

function Sqli() {
  return (
    <div style={{ padding: "20px" }}>
      <ReactMarkdown>{sqli}</ReactMarkdown>
    </div>
  );
}

export default Sqli;