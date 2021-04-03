import React,{useEffect, useState} from 'react'
import './FORMS/Login.css'
import INPUT_LABEL from './ELEMENTS/InputFieldLabel'
import Button from './ELEMENTS/Button'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


function Setting(){
    console.log("INSIDE SETTING")
  
    const initialFormState={
        email:'',
        password:'',
    }
    const [formState,updateFormState]=useState(initialFormState)
    function handle_onChange(e){
        updateFormState(()=>({...formState,[e.target.name]:e.target.value}))
    }
    function handleAddPost(e){
             //FOR RESET PASSWORD
    }
    return(
        <div id="login">
        <div id="Left_Login">

        </div>
     
      <form id="Right_Login" onSubmit={handleAddPost}>
     {/* <INPUT_LABEL label="PHONE"            name="phone"          type='phone'                 marginLabelLeft='30%' onChange={handle_onChange}/> */}
     <INPUT_LABEL label="EMAIL"                name="email"          type='email'                 marginLabelLeft='20px' onChange={handle_onChange}/>

     <INPUT_LABEL label="NEW PASSWORD"         name="password"        type='password' required="true" marginLabelLeft='20px' onChange={handle_onChange}/>

      <Button marginTop="3em" type="submit">SUBMIT</Button>
      
      </form>    
     
     

   </div>

    )

}
export default Setting
