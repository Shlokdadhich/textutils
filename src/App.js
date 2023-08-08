import './Appa.css';
import Alert from './component/Alert';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null)

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  const toggle = () => {
    if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("blue mode is disabled", "success");
    }
    else {
      setmode('dark');
      document.body.style.backgroundColor = '#21214e';
      showalert("blue mode is enabled", "success");
    }
  }


  return (
    <>
    {/* <Router> */}
      <Navbar title="textutils" about="abouttextutils" mode={mode} toggle={toggle} />
      <Alert alert={alert} />
      <div className="container">
          {/* <Routes>
            <Route exact path="/about" 
            element={<About />}> */}
              <About />
            {/* </Route>
            <Route exact path="/"  */}
            element={<TextForm heading="Enter text to analyze"  mode={mode} showalert={showalert} />}
            {/* ></div></Route>
          </Routes> */}
        </div>
    {/* </Router> */}
    </>
  );
}

export default App; 