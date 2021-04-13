import React,{useEffect, useState} from 'react'
import './DisplayArticle.css'
import PostCard from './PostCard'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import HOC from './HOC'

function DisplayArticle(props){
    // console.log(props.verifiedUser) 
    let history=useHistory()
    
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

    function reload(){
        handlePosts()
        handleUsers()
    } 

      const articleList=posts.map(
        (posts)=>{
      
         USERDETAIL() //Function Call
         //Finding DEATIL OF USER
         var USER
         var POSTID
         function USERDETAIL()
         {  
            users.map((users)=>{if(users.id===posts.userId){
            USER=users.firstname
            POSTID=posts.id
                    }})
         }
      
          return <li key={posts.id}>
                     <PostCard title={posts.title} body={posts.body} user={USER} postid={POSTID} reload={reload}  post_userid={posts.userId} /> 
                 </li>
        }
      )  
    return(
    <div className="articleMain">
         {
             props.verifiedUser===true&&(
                 <h3 className="article_h1" onClick={()=>{history.push("/article/user")}}>EDIT MY POSTS</h3>
             )
         }
        <div id="articleLayout">
        <ul>
          {articleList}
        </ul>
        </div>
   </div>

    )

}
export default HOC(DisplayArticle)