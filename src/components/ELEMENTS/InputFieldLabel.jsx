import React from 'react'
import './InputFieldLabel.css'

function InputFieldLabel({
    children,
    type,
    onChange,
    value,
    width,
    height,
    name,
    placeholder,
    label,
    id,
    required,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginLabelLeft,
}){

if(required==='true')
  {
    var RequiredState=label.concat(" * ");
    // console.log(RequiredState)
  }
else
  {
    var RequiredState=label
    // console.log(RequiredState)
  }  
// console.log(width)
// console.log(height)

// console.log({width})
// console.log({height})
return(
    <div className="inputFieldlabel" style={{marginTop,marginBottom,marginLeft,marginRight}}>
    <label style={{marginLeft:marginLabelLeft}}>{RequiredState}</label><br/>
    <input
       id={id}
       className="inputField"
       type={type} 
       onChange={onChange}
       value={value}
       style={{width,height}}
       name={name}
       placeholder={placeholder}
       required
    >
    {children}
    </input>
    </div>
)    
}
export default InputFieldLabel