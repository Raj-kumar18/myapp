
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [mode,setMode] = useState("light")
  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.background = "#0e1324"
      document.body.style.color = "white"
    }
    else{
      setMode("light")
      document.body.style.background = "white"
      document.body.style.color = "black"
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About US" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">

      <TextForm heading="Enter the text to analyze" mode={mode} />
      {/* <About/> */}
      </div>
    </>

  );
}

export default App;
