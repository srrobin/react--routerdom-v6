import React from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { posts } from '../Post/data';


const SinglePost = () => {
    const params = useParams();
    const navigate =useNavigate();

    const goBack =() =>{
      navigate("/post",{replace : true})
    // navigate(-1);
    }
   
    return (
        <div>
            <p>Post id is{params.id}</p>
            {posts.map(post =>
                post.id === parseInt(params.id) && 
                <div>
                    <p>{post.title}</p>
                    <p>{post.des}</p>
                </div>
            )}
           <button type="button" onClick={goBack}> go to posts</button>
        </div>
    );
};

export default SinglePost;