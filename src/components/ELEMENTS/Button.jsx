import React from 'react'
import './Button.css'
function Button({
    width,
    height,
    name,
    onClick,
    type,
    children,
    id,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    
}){
   return(
       <button className="button" style={{width,height,marginLeft,marginBottom,marginRight,marginTop,}} onClick={onClick} type={type} id={id} name={name} >
           {children}
       </button>   
   )
}
export default Button