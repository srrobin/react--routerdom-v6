import React from 'react';
import { Link } from "react-router-dom";
import { posts } from './data';

const Post = () => {
    //   console.log(posts);

    return (
        <div style={{ marginTop: "50px", marginLeft: "20px" }}>
            <h1>  Poist</h1>
            {posts.map((post) =>
                <p><Link to={`/post/${post.id}`}> {post.title} </Link> <br /></p>
            )}
        </div>
    );
};

export default Post;