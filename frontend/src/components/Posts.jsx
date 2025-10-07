import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import axios from "axios";

const Posts = () => {
  const posts = useLoaderData();
  const [allPost, setallPost] = useState();

  const favItem = JSON.parse(localStorage.getItem("fav")) ?? [];
  const [isfavpost, setisfavpost] = useState(false);

  let path = window.location.pathname === "/myPost" ? true : false;

  useEffect(() => {
    setallPost(posts);
  }, [posts]);

  const ondelete = async (id) => {
    await axios
      .delete(`http://localhost:3000/posts/${id}`)
      .then((res) => console.log(res));
    setallPost((posts) => posts.filter((posts) => posts._id !== id));
  };

  const favpost = (item) => {
    let updatedFav;

    const isAlreadyFav = favItem.some((post) => post._id === item._id);

    if (!isAlreadyFav) {
      updatedFav = [...favItem, item];
    } else {
      updatedFav = favItem.filter((post) => post._id !== item._id);
    }

    localStorage.setItem("fav", JSON.stringify(updatedFav));
    setisfavpost((prev) => !prev);
  };

  return (
    <>
      {allPost?.map((item, index) => {
        return (
          <div key={item._id} className="post">
            <h2 className="post-title">{item.title}</h2>
            {item.coverImage && (
              <img
                src={`http://localhost:3000/images/${item.coverImage}`}
                alt={item.title}
                className="post-image"
              />
            )}
            <p className="post-content">{item.content}</p>
            <div className="icon">
              {!path ? (
                <FaBookmark
                  onClick={() => favpost(item)}
                  style={{
                    color: favItem.some((res) => res._id === item._id)
                      ? "red"
                      : "",
                  }}
                />
              ) : (
                <div className="righticon">
                  <Link to={`/editpost/${item._id}`}>
                    <FaEdit />
                  </Link>
                  <MdDelete
                    onClick={() => ondelete(item._id)}
                    className="deleteicon"
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
