// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.css'





const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor =() => {
        if(window.scrollY >= 100 ) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? 'header header-bg' : 'header'}>
         <Link to='/'><img id='logo' src='https://cdn.glitch.global/ff80f9d6-a64f-42f1-9850-de7d0b3fdd5d/pngwing.com%20(1).png?v=1689800952817' alt="Logo Sand" /></Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/weather'>Products</Link>
            </li>
        
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: 'white'}} />) : <FaBars size={20} style={{color: 'white'}}/> }
            
        </div>
    </div>
  )
}

export default Navbar