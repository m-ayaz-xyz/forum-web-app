import React from 'react'
import './app.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/Home'
import MainNav from './components/MainNav'
import axions from 'axios'
import Editpost from './pages/Editpost'
// import AddPost from './pages/AddPost'

const getAllPost = async()=>{
  let allPost=[]
  await axions.get('http://localhost:3000/posts').then(res=>{
    allPost=res.data
  })
  return allPost
}

const getfavPosts=()=>{
  return JSON.parse(localStorage.getItem("fav"))
}

const getMyPost = async()=>{
  let user = JSON.parse(localStorage.getItem("user"))
  let allPosts = await getAllPost()
  return allPosts.filter(item=>item.createdBy === user?._id)
}

const router = createBrowserRouter([
  {path: "/", element:<MainNav/>, children:[
    {path: "/", element:<Home/>, loader: getAllPost},
    {path: "/myPost", element:<Home/>, loader:getMyPost},
    {path: "/postBookmark", element:<Home/>, loader:getfavPosts},
    {path: "/editpost/:id", element:<Editpost/>}
  ]}
])

const App = () => {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App