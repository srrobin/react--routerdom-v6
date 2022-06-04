import React from 'react';
import Navbar from './components/Navbar/Navbar';
import 'antd/dist/antd.min.css'
// import Signin from './components/Signin/Signin';
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Post from './components/Post/Post';
import { Footer } from 'antd/lib/layout/layout';
import SinglePost from './components/SinglePost/SinglePost';
import Overview from './components/Overview/Overview';
import Signin from './components/Signin/Signin';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="post" element={<Post />}/>
        <Route path="post/:id" element={<SinglePost />}/>
        <Route path="contact" element={<Contact />}>
           <Route path="overview" element={<Overview />}/>
        </Route>
      </Routes>
        <Footer/>
    </BrowserRouter>
    {/* <Signin/> */}
    </>
  );
};

export default App;