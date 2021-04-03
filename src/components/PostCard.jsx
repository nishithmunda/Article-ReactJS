
import './PostCard.css'
import Button from './ELEMENTS/Button'
import {Link} from 'react-router-dom' 
import axios from 'axios'


function PostCard({
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

    return(
     <div className="card" style={{width,height}}>
          <div>
              <h5 style={{color:"rgb(151, 151, 151)" ,marginBottom:'10px'}}>{user}</h5>
                 <h6 style={{color:"#53aae9"}}>------------------</h6>                       
              <h3>{title}</h3>
              <h6 style={{color:"#53aae9"}}>------------------</h6>
              <p style={{margin:"20px 0", maxWidth:'750px'}}>{body}</p>
          </div>
        
           <Link style={{textDecoration:'none'}}to={`/view/${postid}`}><Button width='80px' height="35px" marginLeft="25px">VIEW</Button> </Link>         
     </div>   
    )
}

export default PostCard