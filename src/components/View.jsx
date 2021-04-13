import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import './View.css'

const View=()=>{

    const initialFormState={
        articleTitle:'',
        category:'',
        articleDesc:'',
    }
    const [formState,updateFormState]=useState(initialFormState)
    const {id}=useParams();

    useEffect(()=>{
        loadPost();
    },[])
    const loadPost=async()=>{
        const result=await axios.get(`http://localhost:4000/posts/${id}`)
        console.log(result)
        updateFormState(()=>({...formState, articleTitle:result.data.title, category:result.data.category,articleDesc:result.data.body}))   
   }
   const {articleTitle,category,articleDesc}=formState
    return(
         <div className="full_article_display">
             <h1>{articleTitle}</h1><br></br><br></br>
             
             <p>{articleDesc}</p>
         </div>
    )
}
export default View