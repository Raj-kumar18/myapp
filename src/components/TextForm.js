import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        let newText = text.toUpperCase() 
        setText(newText)
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase() 
        setText(newText)
    }
    const handleRsClick = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    const handleCopyClick = ()=>{
        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value);
    }
    const handleOnChange = (e)=>{
        setText(e.target.value)
    }


    const [text, setText] = useState("")
    return (
        <>
        <div className='container'>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"#292727":"white",color:props.mode==="dark"?"white":"black"}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleRsClick}>Remove Extra space</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy text</button>
        </div>

        <div className="container my-2">
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} word, {text.length} characters</p>
            <p>{0.08 * text.split(" ").length} Minute read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>


        </>
    )
}
