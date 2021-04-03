import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

function Home(){
    return(
        <>

        <div id="box2">
         ARTICLE<br/><Link className="create_link" to="/create">CREATE</Link>
        </div>    

        </>
    )
}

export default Home