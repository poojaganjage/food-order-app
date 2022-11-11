import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import Logo from '../assets/logo.png';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }
  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}>
            <img src={Logo} alt='Logo' />
            <div className="hiddenLinks">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/menu'>Menu</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>
        </div>
        <div className="rightSide">
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/menu'>Menu</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <button onClick={toggleNavbar}><ReorderIcon /></button>
        </div>
    </div>
  );
}
export default Navbar;
