import React,{useState} from 'react'
import './register.css'
import INPUT_LABEL from '../ELEMENTS/InputFieldLabel'
import Button from '../ELEMENTS/Button'
import axios from 'axios'
import {useHistory,Link} from 'react-router-dom'

function Register(){
    let history=useHistory();  
    const initialFormState={
        firstname:'',
        lastname:'',
        phone:'',
        email:'',
        password:'',
        confirmpassword:''
    }
  
    const [formState,updateFormState]=useState(initialFormState)
    function handle_onChange(e){
        updateFormState(()=>({...formState,[e.target.name]:e.target.value}))
    }
    async function handleAddPost(e){
        e.preventDefault()
        const{firstname,lastname,phone,email,password}=formState
        const input={
            firstname:firstname,
            lastname:lastname,
            phone:phone,
            email:email,
            password:password,
        }
        // console.log(input)
        await axios.post('http://localhost:4000/users',input)
        .then(function (response) {
            console.log(response);
            history.push("/join/login")
          })  
        .catch(function (error) {
            console.log(error);
          });
    }

    const{firstname,lastname,phone,email,password,confirmpassword}=formState
    return(
         <div id="register">
              {/* <div id="Left_Register">

              </div> */}
           
            <form id="Right_Register" onSubmit={handleAddPost}>
            <INPUT_LABEL label="FIRSTNAME"       name="firstname" type='text'                 marginLabelLeft='20px' onChange={handle_onChange} value={firstname}/>
            <INPUT_LABEL label="LASTNAME"        name="lastname"  type='text'                 marginLabelLeft='20px' onChange={handle_onChange} value={lastname}/>

  
           <INPUT_LABEL label="PHONE"            name="phone"          type='phone'                 marginLabelLeft='20px' onChange={handle_onChange} value={phone}/>
           <INPUT_LABEL label="EMAIL"            name="email"          type='email'                 marginLabelLeft='20px' onChange={handle_onChange} value={email}/>
    
           <INPUT_LABEL label="PASSWORD"         name="password"        type='password' required="true" marginLabelLeft='20px' onChange={handle_onChange} value={password}/>
           <INPUT_LABEL label="CONFIRM PASSWORD" name="confirmpassword" type='password' required="true" marginLabelLeft='20px' onChange={handle_onChange} value={confirmpassword}/>

            <Button marginTop="3em" type="submit">SUBMIT</Button>
            <Link to="/join/login" style={{textDecoration:'none' ,fontStyle:"italic"}}>Already have an account ??</Link>
            </form>    
           
           

         </div>
    )
}

export default Register