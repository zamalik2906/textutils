import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpperCaseClick = () => {
        // alert("Upper case clicked");
        let upperCase = text.toUpperCase();
        setText(upperCase);
    }
    const handleOnChange = (event) => {
        //alert("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text Below To Analyze')
    return (
        <div className=''>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpperCaseClick}>Uppercase</button>
            {/* <button className="btn btn-primary">Lowercase</button> */}
            {/* <button className="btn btn-primary">Uppercase</button> */}

        </div>
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

