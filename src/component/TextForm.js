import React,{useState} from 'react'

export default function Textbar(props) {
    const [text,settext] = useState("enter text here")
    const handleonchange=(event)=>{
        // console.log("onchange");
        settext(event.target.value)
    }
    const handleUpClick=()=>{
        // console.log(text)
        let newtext=text.toUpperCase()
        settext(newtext)
        props.show("letters converted to uppercase","success")
    }
    const handlelowClick=()=>{
        // console.log(text)
        let newtext=text.toLowerCase()
        settext(newtext)
props.show("letters converted to lowercase","success")        
    }
    const reversechClick=()=>{
        let newtext=text.split('').reverse().join('')
        settext(newtext)
props.show("letters get reversed by characters","success")
    }
    const reversewoClick=()=>{
        let newtext=text.split(' ').reverse().join(' ')
        settext(newtext)
props.show("letters get reversed by words","success")
    }
    const clear=()=>{
        let newtext  =""
        settext(newtext)
props.show("click to clear text","success")
    }
    const hcopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
props.show("click to copy","success")
    }
   
    return (<>
        <div style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
               <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}value={text} onChange={handleonchange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>click to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handlelowClick}>click to lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={reversechClick}>click to reverse character</button>
            <button className="btn btn-primary mx-2 my-2" onClick={reversewoClick}>click to reverse words</button>
            <button className="btn btn-primary mx-2 my-2" onClick={clear}>click to clear</button>
            <button className="btn btn-primary mx-2 my-2" onClick={hcopy}>click to copy</button>
       
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>your text summary</h2>
           <p>{text.split(" ").length}words and{text.length} characters</p> {/* split(" ") will make an array of senetence on the basis of spaces */}
            <p>time to read{0.008*(text.split(" ").length)}</p>
            <h2>preview</h2>
            <p>{text.length===0?'enter to preview':text}</p>
        </div>
        </>
    )
}
