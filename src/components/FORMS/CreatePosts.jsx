import React,{useState,useEffect} from 'react'
import InputFieldLabel from '../ELEMENTS/InputFieldLabel'
import TextArea from '../ELEMENTS/TextArea'
import Button from '../ELEMENTS/Button'
import axios from 'axios'
import jwt from 'jwt-decode'
import './Create_Edit_article.css'
import {useHistory} from 'react-router-dom'


    

function CreatePosts(){
    let history=useHistory();  
    const [loguserid,setloguserid]=useState('')
    const [verfiedUser,setverfiedUser]=useState(false);

    function Accesstoken(){
        try{
        const token=localStorage.getItem("token")
        if(token!==null){
            setverfiedUser(true)
        }
        const id = jwt(token);
        setloguserid(id.sub)
         }

        catch(error){
            console.log(error)
        } 
    }
    useEffect(
        ()=>{
            Accesstoken()
        },[]
    )

  
    const initialFormState={
        articleTitle:'',
        category:'',
        articleDesc:'',
    }
    const [formState,updateFormState]=useState(initialFormState)
    function handle_onChange(e){
        updateFormState(()=>({...formState,[e.target.name]:e.target.value}))
    }

    function handleCreatePost(e){
        e.preventDefault()
        const{articleTitle,articleDesc,category}=formState
        const input={
            userId: parseInt(loguserid),           //id from login user
            title:articleTitle,
            category:category,
            body: articleDesc,
        }
        // console.log(input)
        axios.post('http://localhost:4000/posts',input)
        .then(function () {
            history.push("/article")
          })  
        .catch(function (error) {
            console.log(error);
          });
    }


    const{articleTitle,articleDesc,category}=formState
return(
    <div id="create_edit_form" style={{ padding:'8px'}} >
       {verfiedUser===false && (
           <h1> LOG-IN REQUIRED</h1>
       )}  
        {verfiedUser===true && (
             <form onSubmit={handleCreatePost}>
             <InputFieldLabel  marginBottom="0px" label="ARTICLE NAME"                   marginLabelLeft='20px'  name='articleTitle'   value={articleTitle}      onChange={handle_onChange} required='true'/><br/>
             <InputFieldLabel  marginBottom="0px" label="SELECT CATEGORY"                marginLabelLeft='20px'  name='category'       value={category}          onChange={handle_onChange}/><br/>
             <TextArea         marginBottom="0px" label="ARTICLE DESCRIPTION"            marginLabelLeft='20px'  name='articleDesc'      value={articleDesc}       onChange={handle_onChange}/><br/>
             <Button           width='200px' height='35px' marginBottom="20px" type="submit">SUBMIT</Button>
            </form>
        )}     
    </div>

)
}
export default CreatePosts