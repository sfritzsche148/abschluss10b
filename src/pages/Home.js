import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db, storage } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);


  const postCollectionRef = collection(db, "post");
  let navigate = useNavigate();

  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPost();
  });

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
            </div>
            <div className="postTextContainer"> {post.postText} </div>
            <div className="postTextContainer">
      
            </div>
          </div>
        );
      })}
      
    </div>
  );
}
export default Home;