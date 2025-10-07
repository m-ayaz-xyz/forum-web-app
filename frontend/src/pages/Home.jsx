import React from "react";
import Posts from "../components/Posts";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import './App.css';

const Home = () => {
  const [contentdata, setcontentdata] = useState({})

  //so that the write post form should come after logging in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate()

  const isloggedin=()=>{
    let token = localStorage.getItem("token")
     
    if(token){
      return true
      navigate("/")
    }
    else{
      return false
    }
  }
  
  const onHandleChange=(e)=>{
    let val = (e.target.name === "contentImage") ? e.target.files[0] : e.target.value
    setcontentdata(pre=>({...pre, [e.target.name]:val}))
  }

  const onHandleSubmit = async(e)=>{
    e.preventDefault()
    // console.log(contentdata);
    await axios.post("http://localhost:3000/posts", contentdata, {
      headers:{
        'Content-Type': 'multipart/form-data',
        'authorization': 'bearer '+ localStorage.getItem("token"),
      }
    })
    .then(()=>navigate("/"))
  }


  return (
    <div className="container">

      {/* Main Content Wrapper */}
      <div className="main-content-wrapper">
        <main>
          {/* Post Creation Section with Title, Content, and Image */}
          {isloggedin() ? <form className="post-creation" onSubmit={onHandleSubmit}>
            <input
              type="text"
              placeholder="Post Title"
              className="post-title-input"
              name="title"
              onChange={onHandleChange}
            />
            <textarea
              placeholder="What's on your mind?"
              className="post-content-input"
              rows="4"
              name="content"
              onChange={onHandleChange}
            ></textarea>
            <div className="image-upload-container">
              <label htmlFor="image-upload" className="image-upload-label">
                <span className="upload-text">Upload Image</span>
              </label>
              <input
                type="file"
                id="image-upload"
                className="image-upload-input"
                name="contentImage"
                onChange={onHandleChange}
              />
            </div>
            <button className="post-button">Post</button>
          </form> : ""
          }
          

          {/* Post List Section */}
          <div className="post-list">
            
              <Posts />
            
          </div>
        </main>
      </div>

      {/* Footer Section */}
    </div>
  );
};

export default Home;
