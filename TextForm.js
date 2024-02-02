import React, {useState} from 'react'



export default function TextForm(props) {
  //when we click uppercase button 
  const handleUpClick = ()=>{
     let newText = text.toUpperCase();
     setText(newText)
  }

  //when we  click lowercase button
  const handleLoClick = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext)
  }

  //when we click clear button
  const handleClClick = ()=>{
   let newtext=("")
   setText(newtext)
  }
   //when we click remove extraspaces
   const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
   }
  //when we copy the text
  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
   text.select();
   navigator.clipboard.writeText(text.value);
  }
  //for changing in text area
  const handleOnChange = (event)=>{
   setText(event.target.value) //because of this we can write something in textarea
  }
  const [text, setText] = useState('Enter text here');
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div> 
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
      <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove Spaces</button>
       
    </div>

    <div className="container my-3">
     <h3>Your text summary</h3>
     <p>{text.split(" ").length} words and {text.length} characters</p>
     <p>{0.008* text.split(" ").length} Minutes read</p>
    <h3>Preview</h3>
    <p>{text}</p>
    </div>
    </>
  )
}
