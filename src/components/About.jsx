import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color == "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setBtnText("Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Dark Mode");
    }
  };
  return (
    <div className="container" style={myStyle}>
      <h1 className="my-2">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Analyze your text
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, Character count, Convert text to Uppercase or Lowercase, Clear the text with a single click,
              Copy text to the clipboard instantly, Remove extra spaces for clean formatting, Get a real-time word and character count, Estimate reading time based on text length
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Free to Use 💯
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils is completely free to use, with no hidden charges or subscriptions. Enjoy all its features without any cost—whether you're formatting text, copying content, or cleaning up
              extra spaces! 🚀
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Browser Compatibility 🌍
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils is designed to work seamlessly across all modern web browsers, including Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, and Opera. Whether you're on a desktop, laptop,
              tablet, or mobile device, TextUtils ensures a smooth and responsive experience without the need for any downloads or installations. 🚀
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
