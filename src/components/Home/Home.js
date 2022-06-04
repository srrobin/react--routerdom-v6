import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div style={{marginTop:"50px",marginLeft:"20px"}}>
          <h1>  Home</h1>
          <p>This is HOME page</p>
          <Link to="/contact/overview">contact overview</Link>
        </div>
    );
};

export default Home;