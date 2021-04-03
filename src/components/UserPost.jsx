import React,{useEffect, useState} from 'react'
import './DisplayArticle.css'
import User_PostCard from './User_PostCard'
import Button from './ELEMENTS/Button'
import axios from 'axios'
import jwt from 'jwt-decode'

function UserPost(){

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


   
    useEffect(()=>{
        Accesstoken()
        handlePosts()
        handleUsers()
      },[])

    const [posts,setPosts]=useState([])
    const [users,setUsers]=useState([])
     //HANDLE POST FUNCTION
    async function handlePosts(){
        await axios.get('http://localhost:4000/posts')
        // .then((response)=>console.log(response.data))
        .then((response)=>setPosts(response.data.reverse()))
     
      }
    
      //HANDLE USER FUNCTION
    async function handleUsers(){
    await axios.get('http://localhost:4000/users')
    // .then((response)=>console.log(response.data))
    .then((response)=>setUsers(response.data))
   
     }

    const articleList=posts.map(
        (posts)=>{

         USERDETAIL() //Function Call
         //Finding DEATIL OF USER
         var USER
         var USER_id
         var POSTID

         function USERDETAIL()
         {  
            users.map((users)=>{if(users.id===posts.userId){
            USER=users.firstname
            POSTID=posts.id
            USER_id=users.id
            }})

         }

        // console.log(typeof(loguserid))
        if(posts.userId===parseInt(loguserid))
        {
            return <li key={posts.id}>
            <User_PostCard title={posts.title} body={posts.body} user={USER} postid={POSTID}/> 
            </li>
        } 


        }
      )  
    return(
    <div className="articleMain">
       {verfiedUser===false && (
           <h1> LOG-IN REQUIRED</h1>
       )}  

       {verfiedUser===true && (
                   <div id="articleLayout">
                   <ul>
                     {articleList}
                   </ul>
                   </div>
       )} 

   </div>

    )

}
export default UserPost