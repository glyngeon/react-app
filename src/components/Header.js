import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Header = () => {
  const [btnButton, setBtnButton] = useState("Logout");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser, setUserName} = useContext(UserContext);


  // if no dependency array => useeffect will called on every render
  // if dependency array is empty = [] => useeffect will called only once 
  // if dependency array is btnButton => useeffect will called when btnButton is updated
  useEffect(() => {
    console.log('use effect');
  }, [])

  logInToggle = () => {
    if (btnButton === 'Login') {
      setBtnButton('Logout');
      setUserName('Gaurav');
    } else {
      setBtnButton('Login');
      setUserName('Default');
    }
  }

  return (
    <div className="sticky top-0 bg-white flex justify-between items-center shadow-lg z-50">
      <div className="w-[90]">
        <img className="w-[100%]" src={LOGO_URL} alt="logo" />
      </div>
      <div className="mr-8">
        <ul className="flex">
          <li className="p-4 cursor-pointer hover:bg-gray-50">Online Status: {onlineStatus ? '🟢' : '🔴'}</li>
          <li className="p-4 cursor-pointer"><Link to="">Home</Link></li>
          <li className="p-4 cursor-pointer"><Link to="about">About</Link></li>
          <li className="p-4 cursor-pointer"><Link to="contact">Contact Us</Link></li>
          <li className="p-4 cursor-pointer">Cart</li>
          <li className="p-4 cursor-pointer hover:bg-gray-50"
            onClick={logInToggle}
          >
            {btnButton}
            <span aria-hidden="true">&rarr;</span>
          </li>
          <li className="p-4 cursor-pointer font-semibold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
