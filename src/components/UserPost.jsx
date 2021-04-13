import React,{useEffect, useState} from 'react'
import './DisplayArticle.css'
import User_PostCard from './User_PostCard'
import axios from 'axios'
import HOC from './HOC'

function UserPost(props){
   // console.log(props.verifiedUser) 
   // console.log(props.loguserid) 
 
    useEffect(()=>{
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
        if(posts.userId===parseInt(props.loguserid))
        {
            return <li key={posts.id}>
            <User_PostCard title={posts.title} body={posts.body} user={USER} postid={POSTID}/> 
            </li>
        } 


        }
      )  
    return(
    <div className="articleMain">
       {props.verifiedUser===false && (
           <h1> LOG-IN REQUIRED</h1>
       )}  

       {props.verifiedUser===true && (
                   <div id="articleLayout">
                   <ul>
                     {articleList}
                   </ul>
                   </div>
       )} 

   </div>

    )

}
export default HOC(UserPost)