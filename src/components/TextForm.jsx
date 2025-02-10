import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper Case was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!", "success");
  };
  const handleLoClick = () => {
    // console.log("Upper Case was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!", "success");
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces!", "success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{ color: props.mode === "dark" ? "white" : "black", backgroundColor: props.mode === "dark" ? "#505050" : "white" }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Upper Case
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Lower Case
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2>Text Summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Your Text Preview Here"}</p>
      </div>
    </>
  );
}
