import React  from 'react';
import './Navbar.css'
import { NavLink } from "react-router-dom";
const Navbar = () => {
    // const [toggleMenu, setToggleMenu] = useState(false)
    // const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    // const toGgleNav =() =>{
    //     setToggleMenu(!toggleMenu);
    // }
    // useEffect(() => {

    //     const changeWidth = () => {
    //       setScreenWidth(window.innerWidth);
    //     }
    
    //     window.addEventListener('resize', changeWidth)

    //     return () => {
    //         window.removeEventListener('resize', changeWidth)
    //     }
    
    //   }, [])
    return (
        // <div className="menu_area">
        //     <div className='logo'>logo</div>
        //    {(toggleMenu || screenWidth > 550) && (
        //         <ul className='menu_items'>
        //             <li className='menu_item'>home</li>
        //             <li className='menu_item'>about</li>
        //             <li className='menu_item'>work</li>
        //             <li className='menu_item'>contact</li>
        //         </ul>
        //    )}
        //     <div className='bar_icon' onClick={toGgleNav}>{ toggleMenu ? "close" : "bar"}</div>
         
        // </div>
        <>
        <ul style={{marginTop:"50px",marginLeft:"20px"}}> 
        <NavLink style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to="/"><li>Home</li></NavLink>
        <NavLink style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to="/post"><li>Post</li></NavLink>
        <NavLink style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to="/contact"><li>Contact</li></NavLink>
        </ul>
     </>
    );
};

export default Navbar;

