// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,Switch,Route,Link
// } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Link from 'react-router-dom';




function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const handleToggle = () => {
    if (mode === 'light') {
      setMode('dark');
      setAlertMethode("Dark mode enabled", "success")
    }
    else {
      setMode('light');
      setAlertMethode("Light mode enabled", "success")
    }
  }

  const setAlertMethode = (message, type) => {
    setAlert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggle={handleToggle} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />}>
            {/* <About /> */}
          </Route>
          <Route exact path="/" element={<TextForm heading="Enter Text" alert={setAlertMethode} />}>
        
          </Route>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
