import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpperCaseClick = () => {
        let upperCase = text.toUpperCase();
        setText(upperCase);
        upperCase === '' ? props.alert("No text found", "danger") : props.alert("Converted to UPERCASE", "success");
    }
    const handleLowerCaseClick = () => {
        let lowerCase = text.toLowerCase();
        setText(lowerCase);
        lowerCase === '' ? props.alert("No text found", "danger") : props.alert("Converted to LOWERCASE", "success");
        
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    const handleClearClick = () => {
        let text = '';
        setText(text);
    }
    const [text, setText] = useState('')
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary me-2" onClick={handleUpperCaseClick}>Uppercase</button>
            <button className="btn btn-primary me-2" onClick={handleLowerCaseClick}>Lowercase</button>
            <button className="btn btn-primary me-2" onClick={handleClearClick}>Clear</button>

        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p><b>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}</b> words, <b>{text.length}</b> characters</p>
            <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length}</b> Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
        </>
    )
}


// Practice code here below

// import React, {useState} from 'react'

// export default function TextForm(props) {
//     const handleUpperCase = ()=> {
//         let uppercasedText = text.toUpperCase();
//         setText(uppercasedText);
//     }
    
//     const changeHandler = (event)=> {
//         setText(event.target.value);
//     }
//     const [text, setText] = useState('Default Value of Box');
//   return (
//       <div>
//         <h1>{props.heading}</h1>
//           <div className="mb-3">
//               <textarea className="form-control" value={text} onChange={changeHandler} id="myBox" rows="6"></textarea>
//           </div>
//           <button className="btn btn-primary" onClick={handleUpperCase}>UPPERCASE</button>
//       </div>
//   )
// }

