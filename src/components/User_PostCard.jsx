
import './PostCard.css'
import Button from './ELEMENTS/Button'
import {Link} from 'react-router-dom' 
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function User_PostCard({
  postid,
  body,
  title,
  userId,
  height,
  width,
  user,
  reload
})
{
  let history=useHistory();
    return(
     <div className="card" style={{width,height}}>
          <div>
              <h5 style={{color:"rgb(151, 151, 151)" ,marginBottom:'10px'}}>{user}</h5>
                 <h6><time>{new Date().toDateString()}</time></h6>
                 <h6 style={{color:"#53aae9"}}>------------</h6>                       
              <h3>{title}</h3>
              <h6 style={{color:"#53aae9"}}>------------</h6>
              <p style={{margin:"20px 0", maxWidth:'750px'}}>{body}</p>
          </div>
        
                       <Button  height="35px" marginLeft="25px" onClick={async()=>{await axios.delete(`http://localhost:4000/posts/${postid}`).then(window.location.href = "/article/user") }}>DELETE</Button> 
                       <Link style={{textDecoration:'none'}}to={`/editPost/${postid}`}><Button width='80px' height="35px" marginLeft="25px">EDIT</Button> </Link>
                       <Link style={{textDecoration:'none'}}to={`/view/${postid}`}><Button width='80px' height="35px" marginLeft="25px">VIEW</Button> </Link>         
     </div>   
    )
}

export default User_PostCard