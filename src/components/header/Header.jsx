import React, { useState, useEffect } from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import { UilTimes } from '@iconscout/react-unicons'
import Search from "../../pages/search/search"


const Header = () => {
    const [show, setShow] = useState(false);

    const toggleDropdown = () => {
        setShow(!show);
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (show && !e.target.closest('.dropdown_button')) {
            setShow(!show);
            }
        };
        
        document.body.addEventListener('click', handleOutsideClick);
    
    }, [show]);


    return (
        <nav id="nav">
            <div className="header">
                <div className="headerLeft">
                    <Link to="/"><img className="header_icon" src="/Logo.png"/></Link>
                </div>
                <Search />
                <div className="headerRight">
                    <p className="link">Sign In</p>
                    <div className="dropdown_button">
                        <button className="btn" onClick={toggleDropdown}>
                            <img src="/menu.svg" className={show ? "hide" : "show"}/>
                            <UilTimes size="24" color="#fff" className={show ? "show" : "hide"}/>
                        </button>
                        <ul className={`dropdown ${show ? "show" : "hide"}`}>
                            <li><Link to="/" style={{textDecoration: "none"}}><span>Movies</span></Link></li>
                            <li><Link to="/" style={{textDecoration: "none"}}><span>TV Series</span></Link></li>
                            <li><Link to="/" style={{textDecoration: "none"}}> <span>Upcoming</span> </Link></li>
                        </ul> 
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
