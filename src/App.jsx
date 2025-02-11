import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "	#404040";
      showAlert("Dark Mode Enabled", "success");
      //document.title = 'TextUtils - Dark Mode'; // This is to change the tite to TextUtils - Dark Mode whenever dark mode is enabled.
      // setInterval(()=> {
      //   document.title = "TextUtils is Amazing"
      // },2000);
      // The above code is to make the title to change every 2 seconds just like FB Messenger whenever we receive new message.
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      //document.title = 'TextUtils - Light Mode'; // This is to change the tite to TextUtils - Light Mode whenever Light mode is enabled.
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container text-start my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text" mode={mode} />}></Route>
            {/* <About /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
