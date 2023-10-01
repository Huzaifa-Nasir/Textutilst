import "./App.css";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForms from "./Components/TextForms";
import DarkForm from "./Components/DarkForm";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  //Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, changeMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [blMode, setBlMode] = useState("light");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  const myMode = function () {
    if (mode === "light") {
      changeMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode has been Enabled", "success");
    } else {
      changeMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
    }
  };
  const BlueMode = function () {
    console.log("blue called");
    if (blMode === "light") {
      console.log("Switching to blue mode");
      setBlMode("blue");
      document.body.classList.add("blue-theme");
      document.body.style.backgroundColor = "rgb(111, 113, 237)";
      showAlert("Blue mode has been Enabled", "success");
    } else {
      console.log("Switching to light mode");
      setBlMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
    }
  };

  return (
    <>
    <Router>
      <Navbar
        title="Text Box"
        title1="Dark Form"
        mode={mode}
        toogleMode={myMode}
        blueFunc={BlueMode}
        blMode={blMode}
      />

      <Alert alert={alert} mode={mode}
        toogleMode={myMode}
        blueFunc={BlueMode}
        blMode={blMode} />
     
        <div className="container">
        <Routes>
          <Route path='/textform' element={<TextForms mode={mode} blMode={blMode} showAlert={showAlert} />} />
          <Route path='/' element={<DarkForm />} />
        </Routes>
        </div>
        </Router>

    </>
  );
}

export default App;
