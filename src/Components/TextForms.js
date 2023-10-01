import React, {useState}from 'react'
import PropTypes from 'prop-types'



export default function TextForms(props) {
  const upperCase =()=>
    {
       console.log("ONclick is Clicked  "+ text);
       let newText = text.toUpperCase();
       setText (newText);
       props.showAlert('To UpperCase','success');
    }
    const lowerCase = function(){
        console.log("To lower case");
        let smallText= text.toLowerCase();
        setText(smallText);
        props.showAlert('To LowerCase','success');
    }
    const Changed =(e)=>
    {
     console.log("Changed");
      setText(e.target.value);
    }
    const [text,setText] = useState("Enter ur text here...")
  return (

    <>
    
    <h1 style={{color : props.mode==='dark'? 'rgb(71, 71, 226)':'black'}}>Type Here</h1>
    <div className="foram">
        <textarea className='form-control' value={text} id="forms" cols="30" rows="10" onChange={Changed} style={{ backgroundColor:props.mode==='dark'?'#343a40':'light' && props.blMode==='blue'? 'rgb(110, 110, 235)':'light', color : props.mode==='dark'? 'rgb(71, 71, 226)':'black'}} ></textarea>
    </div>
    <button id='btn-prim' className='Btn' onClick={upperCase} style={{backgroundColor: props.blMode ==='blue'? '#343a40':'blueviolet' && props.mode==='dark'?'black':'blueviolet' }}>Click To check upperCase</button>
    <button id='btn-sec' className='Btn' onClick={lowerCase} style={{backgroundColor: props.blMode ==='blue'? '#343a40':'blueviolet' && props.mode==='dark'?'black':'blueviolet'}}>Click To check LowerCase</button>

    </>
  )
 
}
