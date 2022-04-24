import React, { useState } from 'react'
import { Link } from 'gatsby'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../assets/images/fs-full-logo.svg'

const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <nav className="navbar">
            <div className="nav-center">

                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} className="logo" alt="Fullscreen AB logga" />
                    </Link>
                    <div className="nav-btn" onClick={() => setShow(!show)}>
                        <GiHamburgerMenu />
                    </div>
                </div>
                <div className={show ? "nav-links show-links" : "nav-links"}>
                    <Link to="/" className="nav-link" activeClassName="active-link" onClick={() => setShow(!show)}>
                        Hem
                    </Link>
                    <Link to="/documentary-and-film" className="nav-link" activeClassName="active-link" onClick={() => setShow(!show)}>
                        Dokumentär 	&#38; TV
                    </Link>
                    <Link to="/content" className="nav-link" activeClassName="active-link" onClick={() => setShow(!show)}>
                        Content
                    </Link>
                    <Link to="/redigering" className="nav-link" activeClassName="active-link" onClick={() => setShow(!show)}>
                        Redigering
                    </Link>
                    <Link to="/contact" className="nav-link" activeClassName="active-link" onClick={() => setShow(!show)}>
                        Kontakt
                    </Link>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar
