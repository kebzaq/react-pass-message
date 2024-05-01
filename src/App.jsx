import { useState } from "react";

import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [output, setOutput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setOutput(value);
  };
  return (
    <>
      <h1>r: Pass a Message</h1>
      <hr />
      <div class="container">
        <h4>A Message You Would Like To Pass</h4>
        <form onSubmit={handleSubmit}>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            id="input"
            placeholder="Type your message here..."
          />
          <button id="btn" type="submit">
            Submit
          </button>
          <button
            onClick={() => {
              setValue("");
            }}
          >
            Reset
          </button>
        </form>
        <h4>Last Message Delivered:</h4>
        <div id="output">
          <p>{output}</p>
        </div>
      </div>
    </>
  );
}

export default App;
