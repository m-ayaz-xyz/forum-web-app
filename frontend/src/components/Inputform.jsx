import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Inputform = ({setisopen}) => {
    const [email, setemail]=useState("")
    const [password, setpassword]=useState("")
    const [isSignUp, setisSignUp]= useState(false)
    const [error, seterror] = useState("")

    const handleonSubmit= async (e)=>{
        e.preventDefault()
        let endpoint = (isSignUp) ? "SignUp" : "LogIn"
        await axios.post(`http://localhost:3000/${endpoint}`, {email,password})
        .then((res)=>{
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("user", JSON.stringify(res.data.user))
            setisopen()
        })
        .catch(data=>seterror(data.response?.data?.error))
    }
  return (
    <>
    <form onSubmit={handleonSubmit}>
        <div className='credentialfield'>
            <div>
            <label>Email</label>
            <input type="email" onChange={(e)=>setemail(e.target.value)} required/>
        </div>
        <div className='credentialfield'>
            <label>Password</label>
            <input type="password" onChange={(e)=>setpassword(e.target.value)} required/>
        </div>
        </div>
        <div className='login-btn'>
        <button type="submit">{(isSignUp)? "SignUp" : "LogIn"}</button>
        {(error != "") && <h6>{error}</h6>}
        <p className='logintext' onClick={()=> setisSignUp(prev=>!prev)}>{(isSignUp)? "Already have an account" : "Create New Account"}</p>
        </div>
    </form>
    </>
  )
}

export default Inputform