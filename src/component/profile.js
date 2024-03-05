
import {useContext } from "react"
import UserContext from "../contextfile/Usercontext"
const Profile=()=>{
    let {user}=useContext(UserContext)
  
    if(!user) return <div><p>Please login</p></div>

    if(user) return <div><p>Welcome {user.username}</p></div>

    
}

export default Profile