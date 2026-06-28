import React from "react";
import ReactMarkdown from "react-markdown";
import xss from "../docs_karcha/03_xss_karcha.md?raw";

function Xss() {
  return (
    <div style={{ padding: "20px" }}>
      <ReactMarkdown>{xss}</ReactMarkdown>
    </div>
  );
}

export default Xss;