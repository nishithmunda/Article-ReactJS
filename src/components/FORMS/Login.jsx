import React,{useEffect, useState} from 'react'
import './Login.css'
import INPUT_LABEL from '../ELEMENTS/InputFieldLabel'
import Button from '../ELEMENTS/Button'
import axios from 'axios'

function Login(){
  
    // let history=useHistory()
 function loggedInUser(){ 
    const token=localStorage.getItem("token")
    if(token!==null){
        console.log("USER LOGGED IN")
    }
     }


  useEffect(()=>{
    loggedInUser()
  },[])


    const initialFormState={
        phone:'',
        email:'',
        password:'',
    }
    const [formState,updateFormState]=useState(initialFormState)
    function handle_onChange(e){
        updateFormState(()=>({...formState,[e.target.name]:e.target.value}))
    }
    function handleAddPost(e){
        e.preventDefault()
        const{phone,email,password}=formState
        const input={
          //  phone:phone,
            email:email,
            password:password,
        }
        // console.log(input)
        axios.post('http://localhost:4000/login',input)
        .then(function (response) {
            console.log(response.data.accessToken);
            const token=response.data.accessToken;
            // const user = jwt(token);
            // console.log("USERTOKEN",user);
            localStorage.setItem('token', token);
            window.location.href = "/"
          })  
        .catch(function (error) {
            console.log(error);
          });
    }
    return(
        <div id="login">
        <div id="Left_Login">

        </div>
     
      <form id="Right_Login" onSubmit={handleAddPost}>

     {/* <INPUT_LABEL label="PHONE"            name="phone"          type='phone'                 marginLabelLeft='30%' onChange={handle_onChange}/> */}
     <INPUT_LABEL label="EMAIL"            name="email"          type='email'                 marginLabelLeft='20px' onChange={handle_onChange}/>

     <INPUT_LABEL label="PASSWORD"         name="password"        type='password' required="true" marginLabelLeft='20px' onChange={handle_onChange}/>

      <Button marginTop="3em" type="submit">SUBMIT</Button>
      
      </form>    
     
     

   </div>

    )

}
export default Login
