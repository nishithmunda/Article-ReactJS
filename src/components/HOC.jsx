import React,{useEffect,useState} from 'react'
import jwt from 'jwt-decode'

const HOC =(Wcomponent)=>{
    const NewComponent=()=>{

        const [loguserid,setloguserid]=useState('')
        const [verfiedUser,setverfiedUser]=useState(false);

        function Accesstoken(){
            try{
            const token=localStorage.getItem("token")
            if(token!==null){
                setverfiedUser(true)
            }
            const id = jwt(token);
            // console.log("",id)
            setloguserid(id.sub)
             }
            catch(error){
                console.log(error)
            } 
        }
       useEffect(()=>{
          Accesstoken()
       },[])
        return(
            <>  
                <Wcomponent verifiedUser={verfiedUser} loguserid={loguserid}/>
            </>
        )
    }
    return NewComponent;
}
export default HOC