import React, { useState } from 'react';
import ReactMarkdown from "react-markdown"
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState("# What's up")

  const handleChange = e => {
    setMarkdown(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className="app">
      <textarea onChange={handleChange} />

      <ReactMarkdown className="preview" source={markdown} />
    </div>
  );
}

export default App;
