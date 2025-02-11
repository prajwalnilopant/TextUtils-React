import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "rgb(64,64,64)" : "white",
  };
  return (
    <div className="container my-2" style={myStyle}>
      <h1 className="my-2">About TextUtils</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={{ color: props.mode === "dark" ? "white" : "black", backgroundColor: props.mode === "dark" ? "#505050" : "white" }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your texts</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ color: props.mode === "dark" ? "white" : "black", backgroundColor: props.mode === "dark" ? "#505050" : "white" }}>
              TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, Character count, Convert text to Uppercase or Lowercase, Clear the text with a single click,
              Copy text to the clipboard instantly, Remove extra spaces for clean formatting, Get a real-time word and character count, Estimate reading time based on text length
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{ color: props.mode === "dark" ? "white" : "black", backgroundColor: props.mode === "dark" ? "#505050" : "white" }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to Use 💯</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ color: props.mode === "dark" ? "white" : "black", backgroundColor: props.mode === "dark" ? "#505050" : "white" }}>
              TextUtils is completely free to use, with no hidden charges or subscriptions. Enjoy all its features without any cost—whether you're formatting text, copying content, or cleaning up
              extra spaces! 🚀
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{ color: props.mode === "dark" ? "white" : "black", backgroundColor: props.mode === "dark" ? "#505050" : "white" }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatibility 🌍</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ color: props.mode === "dark" ? "white" : "black", backgroundColor: props.mode === "dark" ? "#505050" : "white" }}>
              TextUtils is designed to work seamlessly across all modern web browsers, including Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, and Opera. Whether you're on a desktop, laptop,
              tablet, or mobile device, TextUtils ensures a smooth and responsive experience without the need for any downloads or installations. 🚀
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
