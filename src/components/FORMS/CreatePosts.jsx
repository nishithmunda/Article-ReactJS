import React,{useState} from 'react'
import InputFieldLabel from '../ELEMENTS/InputFieldLabel'
import TextArea from '../ELEMENTS/TextArea'
import Button from '../ELEMENTS/Button'
import axios from 'axios'
import './Create_Edit_article.css'
import {useHistory} from 'react-router-dom'
import HOC from '../HOC'

    

function CreatePosts(props){
    console.log(props)
    let history=useHistory();  
  
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
            userId: parseInt(props.loguserid),           //id from login user
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
       {props.verifiedUser===false && (
           <h1> LOG-IN REQUIRED</h1>
       )}  
        {props.verifiedUser===true && (
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
export default HOC(CreatePosts)