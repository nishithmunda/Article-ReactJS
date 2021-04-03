import React,{useEffect, useState} from 'react'
import InputFieldLabel from '../ELEMENTS/InputFieldLabel'
import TextArea from '../ELEMENTS/TextArea'
import Button from '../ELEMENTS/Button'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import jwt from 'jwt-decode'
import './Create_Edit_article.css'

function EditPost(){

    const [loguserid,setloguserid]=useState('')
    const [verfiedUser,setverfiedUser]=useState(true)
    function Accesstoken(){
        try{
        const token=localStorage.getItem("token")
        if(token===null){
            setverfiedUser(false)
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
            loadPost();
        },[]
    )
    
    const {id}=useParams();
    const initialFormState={
        articleTitle:'',
        category:'',
        articleDesc:'',
    }
    const [formState,updateFormState]=useState(initialFormState)
    function handle_onChange(e){
        updateFormState(()=>({...formState,[e.target.name]:e.target.value}))
    }

    const loadPost=async()=>{
        const result=await axios.get(`http://localhost:4000/posts/${id}`)
        console.log(result)
        updateFormState(()=>({...formState, articleTitle:result.data.title, category:result.data.category,articleDesc:result.data.body}))   
   }

    function handleEditPost(e){
        e.preventDefault()
        const{articleTitle,articleDesc,category}=formState
        const input={
            userId: parseInt(loguserid),           //id from login user
            title:articleTitle,
            category:category,
            body: articleDesc,
        }
        // console.log(input)



        axios.put(`http://localhost:4000/posts/${id}`,input)
        .then(function (response) {
            console.log(response);
          })  
        .catch(function (error) {
            console.log(error);
          });
    }
    const{articleTitle,articleDesc,category}=formState
return(
    <div id="create_edit_form" style={{ padding:'8px'}} >
    <form onSubmit={handleEditPost}>
    <InputFieldLabel marginBottom="0px" label="ARTICLE NAME"                   marginLabelLeft='20px'  name='articleTitle' value={articleTitle}      onChange={handle_onChange} required='true'/><br/>
    <InputFieldLabel marginBottom="0px" label="SELECT CATEGORY"              marginLabelLeft='20px'  name='category'       value={category}          onChange={handle_onChange}/><br/>
    <TextArea        marginBottom="0px" label="ARTICLE DESCRIPTION"          marginLabelLeft='20px'  name='articleDesc'     value={articleDesc}      onChange={handle_onChange}/><br/>
    <Button          width='200px' height='35px' marginBottom="20px" type="submit">UPDATE POST</Button>
    </form>
    </div>

)
}
export default EditPost