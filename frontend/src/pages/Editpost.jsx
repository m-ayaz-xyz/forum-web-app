import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Editpost = () => {
  const [postdata, setpostdata] = useState({
    title: "",
    content: "",
  });
  const navigate = useNavigate();
  // const [contentdata, setcontentdata] = useState({});

  const { id } = useParams();
  useEffect(() => {
    const getdata = async () => {
      await axios.get(`http://localhost:3000/posts/${id}`).then((response) => {
        let res = response.data;
        setpostdata({
          title: res.title,
          content: res.content,
        });
      });
    };
    getdata();
  }, []);

  const onHandleChange = (e) => {
    let val =
      e.target.name === "contentImage" ? e.target.files[0] : e.target.value;
    setpostdata((pre) => ({ ...pre, [e.target.name]: val }));
  };

  const onHandleSubmit = async (e) => {
    // const navigate = useNavigate();
    e.preventDefault();
    // console.log(contentdata);

    // const formData = new FormData();
    // formData.append("title", postdata.title);
    // formData.append("content", postdata.content);
    // if (postdata.contentImage) {
    //   formData.append("contentImage", postdata.contentImage);
    // }

    console.log(id);
    
    try {
      await axios
      .put(`http://localhost:3000/posts/${id}`, postdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: "bearer " + localStorage.getItem("token"),
        },
      })
      .then(() => navigate("/myPost"));
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <>
      <div className="main-content-wrapper">
        <form
          className="post-creation"
            onSubmit={onHandleSubmit}
        >
          <input
            type="text"
            className="post-title-input"
            name="title"
            value={postdata.title}
            onChange={onHandleChange}
          />
          <textarea
            className="post-content-input"
            rows="4"
            name="content"
            value={postdata.content}
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
        </form>
      </div>
    </>
  );
};

export default Editpost;
