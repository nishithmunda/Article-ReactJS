import React, { useState,useEffect } from 'react'
import './App.css';
import Register from './components/FORMS/Register'
import Login from './components/FORMS/Login'
import DisplayArticle from './components/DisplayArticle'
import Home from './components/Home'
import CreatePosts from './components/FORMS/CreatePosts';
import EditPost from './components/FORMS/EditPost'
import View from './components/View'
import UserPost from './components/UserPost'
import Setting from './components/Setting'
import {BrowserRouter as Router,Route,Switch,NavLink,useHistory,Link} from 'react-router-dom'

function App() {

  let history=useHistory()

  const [loggedUser,setloggedUser]=useState(false)
  function loggedInUser(){ 
      const token=localStorage.getItem("token")
      if(token===null)
      {
        setloggedUser(false) 
      }
      else{
        setloggedUser(true)
      }
     }

console.log("IS USER LOGGED IN ??",loggedUser)

  function logout(){
    localStorage.removeItem("token") 
    setloggedUser(false) 

  }

     useEffect(()=>{
      loggedInUser()
     },[loggedUser])

  return (
    <div className="Main">
      {/* NAVBAR */}
      <Router>
      <div id="container">
          {/* <div id="logo">
              <img src="" alt="LOGO"></img>
          </div> */}
         
          <div id="menu">
               <ul>
                 <li><NavLink className="link"to="/">HOME</NavLink></li>
                 <li><NavLink className="link"to="/article">ARTICLE</NavLink></li>
                 <li><NavLink className="link"to="/Setting">SETTING</NavLink></li>
                 {/* <li><NavLink className="link"to="/join/register">JOIN</NavLink></li> */}
                 {loggedUser===true && (
                     <li><Link className="link" to='/'  onClick={logout}>LOGOUT</Link></li>
                 )}
                 {loggedUser===false && (
                     <li><Link className="link"  to='/join/register'>JOIN</Link></li>
                 )}
               </ul>
          </div>
          
      </div>
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/article" component={DisplayArticle} />
        <Route exact path="/join/login" component={Login}/> 
        <Route exact  path="/join/register"component={Register}/>
        <Route exact path="/create" component={CreatePosts}/> 
        <Route exact path="/editPost/:id" component={EditPost}/>
        <Route exact  path="/view/:id"component={View}/>
        <Route exact  path="/article/user"component={UserPost}/>
        <Route exact  path="/setting"component={Setting}/>

        
      </Switch>
      </Router> 

     

    </div>
  );
}

export default App;
