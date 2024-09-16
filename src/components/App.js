import React, { useState, useEffect } from "react";
import "../styles/App.css";

function App() {
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const renderMarkdown = () => {
      setLoading(true);
      const renderedHtml = markdown
        .replace(/^# (.*$)/gim, "<h1>$1</h1>") // Heading 1
        .replace(/^## (.*$)/gim, "<h2>$1</h2>") // Heading 2
        .replace(/^### (.*$)/gim, "<h3>$1</h3>") // Heading 3
        .replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>") // Strong
        .replace(/\*(.*)\*/gim, "<i>$1</i>"); // Italic
      setHtml(renderedHtml);
      setLoading(false);
    };

    renderMarkdown();
  }, [markdown]);

  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      <textarea
        className="textarea"
        value={markdown}
        onChange={handleInputChange}
        placeholder="Enter your markdown here..."
      />
      <div className="preview">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        )}
      </div>
    </div>
  );
}

export default App;