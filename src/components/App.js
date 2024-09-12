import React, { useState } from "react";
import "../styles/App.css";

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const showText = (e) => {
    const val = e.target.value;
    if (e.key === "Enter" && val.trim()) {
      setLoading(true);
      setData(val);
      setLoading(false);
      e.target.value = "";
    }
  };

  const renderMarkdown = (text) => {
    let html = text
      .replace(/^# (.*$)/gim, "<h1>$1</h1>") // Heading 1
      .replace(/^## (.*$)/gim, "<h2>$1</h2>") // Heading 2
      .replace(/^### (.*$)/gim, "<h3>$1</h3>") // Heading 3
      .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>") // Bold
      .replace(/\*(.*)\*/gim, "<i>$1</i>"); // Italic

    return { __html: html };
  };

  return (
    <div className="app">
      <textarea
        className="textarea"
        name="textarea"
        onKeyDown={showText}
        placeholder="Enter your markdown here..."
      />
      <div className="preview">
        <div className="loading">{loading ? "Loading..." : ""}</div>
        <div dangerouslySetInnerHTML={renderMarkdown(data)} />
      </div>
    </div>
  );
}

export default App;
