import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { HiX } from 'react-icons/hi'
import './Navbar.css'

const data = [
    {
        label: 'Home',
        to: '/home'
    },
    {
        label: 'About',
        to: '/about'
    },
    {
        label: 'Skill',
        to: '/skill'
    },
    
    {
        label: 'Contact',
        to: '/contact'
    }
]


const Navbar = () => {

    const [toggleIcon, setToggleIcon] = useState(false)
    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);

    }

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to={'/'} className='logo'>AFFAN</Link>
                </div>
                <ul className={`navbar-container-menu ${toggleIcon ? "active" : ""}`}>
                    {
                        data.map((item, key) => (
                            <li key={key} className='navbar-container-menu-item'>
                                <Link to={item.to} className='links'>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                </ul>
                <div className='nav-icon' onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar