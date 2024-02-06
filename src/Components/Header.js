import { useState } from "react";


const Header = () => {

  const[btnNameReact,setBtnNameReact]=useState("Login");
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <button className="login-btn"
          onClick={()=>{
            // btnNameReact='Logout';(This is wrong)
            // setBtnNameReact('Logout');

            btnNameReact==='Login'?
            setBtnNameReact('Logout'):
            setBtnNameReact('Login');
          }}
          >{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;