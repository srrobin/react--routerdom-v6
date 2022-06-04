import React from 'react';
import './Signin.css'
import Logo from "../Signin/logo.jpg"
const Signin = () => {
    return (
        <div className='signin_wrapper'>
           <div className='left_side_info'>
              <div className='left_info'>
                <p>Your well being is our priority</p>
                <h2> Do it the Golden Way</h2>
              </div>
           </div>
           <div className='right_form_area'>
                <form action="/action_page.php" class="container">
                        <div className='logoandtext'>
                        <img src={Logo} alt=''/>
                        {/* <h1>Login</h1> */}

                        </div>

                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required/>

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required/>
                        

                        <button type="submit" class="btn">Login</button>
                    </form>
           </div>
        </div>
    );
};

export default Signin;