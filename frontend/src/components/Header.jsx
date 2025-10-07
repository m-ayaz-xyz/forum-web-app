import React from 'react'
import { useState } from 'react'
import Modal from './Modal'
import Inputform from './Inputform'
import { useEffect } from 'react'

const Header = () => {
  let user = JSON.parse(localStorage.getItem("user"))

  const [isopen, setisopen] = useState(false)

  let token = localStorage.getItem("token")
  const [isLogin, setIsLogin]= useState(token ? false : true)

  useEffect(()=>{
    setIsLogin(token ? false : true)
  },[token])
 
  const checklogin =()=>{
    if(token){
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      setIsLogin(true)
    }
    else{
      setisopen(true) //pop up window to login/signup
    }
    
  }
  return (
    <>
    <header className="header">
        <div className="header-content">
          <h1>Forum</h1>
          <nav className="nav">
            <a href="/" className="link">Home</a>
            <a onClick={()=> isLogin && setisopen(true)} href={!isLogin ? "/myPost" : "#" } className="link">My Posts</a>
            <a onClick={()=> isLogin && setisopen(true)} href={!isLogin ? "/postBookmark" : "#"} className="link">Bookmark</a>
            <a href="#" onClick={checklogin} className="link">{(isLogin)? "Login" : "Logout"}{user?.email ? `(${user?.email})` : ""}</a>
          </nav>
        </div>
      </header>
      {(isopen)&& <Modal onClose={()=>setisopen(false)}><Inputform setisopen={()=> setisopen(false)}/></Modal>}
    </>
  )
}

export default Header