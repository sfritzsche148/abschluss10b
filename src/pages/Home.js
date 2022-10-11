import React, { useState, useEffect } from "react";
import { db, auth, storage } from "../firebase-config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

function Home({ isAuth }) {

  let navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);


  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  return (
    <div className="homePage">
      <div>
      {imageUrls.map((url) => {
        return <img src={url} />;
      })}
      </div>
      <div className="createPostPage">
      <div className="cpContainer">
        <div>
          <input 
          onChange={(event) => {setImageUpload(event.target.files[0])}}
          type='file'
          />
        </div>
        <button onClick={uploadFile}>Submit Post</button>
      </div>
    </div>
    </div>
  );
}
export default Home;