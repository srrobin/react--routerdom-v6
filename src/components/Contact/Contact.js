import React from 'react';
import { Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div style={{marginTop:"50px",marginLeft:"20px"}}>
          <h1>  contact</h1>
          <Outlet/>
        </div>
    );
};

export default Contact;