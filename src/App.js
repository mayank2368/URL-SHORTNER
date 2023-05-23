import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function UrlShortner() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loader, setLoader] = useState("false");

  const fetchData = async () => {
    try {
      setLoader("true");
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${input}`);
      setLoader("false");
      setResult(res.data.result.full_short_link);
    } catch (err) {
      alert(err);
    }
  };

  const handleClick = () => {
    setInput("");
    fetchData();
  };
  return (
    <div className="App">
      <h1>URL Shortner</h1>
      <input
        type="name"
        value={input}
        placeholder="Enter your URL here"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
      {loader === true ? <p>Loading</p> : <p>{result}</p>}
    </div>
  );
}

export default UrlShortner;
