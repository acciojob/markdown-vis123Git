import React, { useState } from "react";
import "../styles/App.css"
function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);


  const showText = (e) => {
    const val = e.target.value;
    if (e.key == "Enter" && val?.trim()) {
        console.log("val===", val);

      setData(val);
      const preview = document.getElementsByClassName("preview")[0]
      const dataHeading = document.createElement("h1");
      dataHeading.innerText = val;
      preview.append(dataHeading)
      e.target.value = ""
      
    }
  };
  return (
    <div className="app">
      <textarea className="textarea" name="textarea" onKeyDown={showText}>
        {/* <p>Enter your text here...</p> */}
      </textarea>
      <div className="preview">
        <div className="loading">{loading ? "Loading..." : ""}</div>
      </div>
    </div>
  );
}

export default App;
