import { useState,useContext } from "react"
import UserContext from "../contextfile/Usercontext"

const Login=()=>{

    const [username,setusername]=useState("");
    const [password, setpassword]=useState("");
    const {setuser}=useContext(UserContext)
       const handleSubmit=(e)=>{
          e.preventDefault();
           setuser({username,password})
           
       }
    return(
        <>
        
            <h2 className="font-extrabold p-10 text-4xl">Login</h2>
            <input type="text"  className="my-3 border border-stone-300 py-2 px-3 rounded-md "
            placeholder="username"
            value={username}
            onChange={(e)=>setusername(e.target.value)}
            />
            <input type="text"  className="my-3 border border-stone-300 py-2 px-3 rounded-md " 
            placeholder="password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            />
            <button className="border border-stone-300 rounded-m px-4 py-2" onClick={handleSubmit}>Submit</button>
        
        </>
    )
}
export default Login