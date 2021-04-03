import React from 'react'
import './TextArea.css'

function TextArea({
    children,
    id,
    row,
    cols,
    name,
    placeholder,
    width,
    height,
    value,
    label,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginLabelLeft,
    onChange,
})

{
    // console.log(width)
    // console.log(height)
    // console.log({width})
    // console.log({height})
    return(
      <div style={{marginTop,marginBottom,marginLeft,marginRight}}>
          <label style={{marginLeft:marginLabelLeft}}>{label}</label><br/>
          <textarea className="textArea" style={{width,height}} cols={cols} row={row} value={value} name={name} id={id} placeholder={placeholder} onChange={onChange}>
               {children}
          </textarea>
      </div>    
    )
}
export default TextArea 