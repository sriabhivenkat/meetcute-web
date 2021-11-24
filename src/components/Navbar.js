import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const NavbarComp = () => {
    return(
        <>
        {window.innerWidth > 768 ?
            <div className="navbar2">
                <Link 
                    to="/"
                    style={{
                        fontFamily: "Inter",
                        fontWeight: "600",
                        color: "white",
                        fontSize: 20,
                        textDecoration: "none",
                        marginRight: 100
                    }}
                >
                    Meetcute.
                </Link>
                {/* <Link 
                    to="/newsroom"
                    style={{
                        fontFamily: "Inter",
                        fontWeight: "600",
                        color: "white",
                        fontSize: 20,
                        textDecoration: "none"
                    }}
                >
                    newsroom
                </Link> */}
                <Link
                    to="/team"
                    style={{
                        fontFamily: "Inter",
                        fontWeight: "600",
                        color: "white",
                        fontSize: 20,
                        marginRight: 100,
                        textDecoration: "none"
                    }}
                >
                    team
                </Link>
                <Link
                    to="/investors"
                    style={{
                        fontFamily: "Inter",
                        fontWeight: "600",
                        color: "white",
                        fontSize: 20,
                        textDecoration: "none"
                    }}
                >
                    investors
                </Link>
                <Link
                    to="/advertising"
                    style={{
                        fontFamily: "Inter",
                        fontWeight: "600",
                        color: "white",
                        fontSize: 20,
                        textDecoration: "none",
                        marginLeft: 100
                    }}
                >
                    partnerships
                </Link>
                {/* <Link
                    to="/market"
                    style={{
                        fontFamily: "Inter",
                        fontWeight: "600",
                        color: "white",
                        fontSize: 20,
                        textDecoration: "none",
                        marginLeft: 100
                    }}
                >
                    market
                </Link> */}
            </div>
            :
            <div className="navbarSmallScreen">
                <Link 
                    to="/"
                    className="link"
                >
                    Meetcute.
                </Link>
                {/* <Link 
                    to="/newsroom"
                    className="link"
                >
                    newsroom
                </Link> */}
                <Link
                    to="/team"
                    className="link"
                >
                    team
                </Link>
                <Link
                    to="/investors"
                    className="link"
                >
                    investors
                </Link>
                <Link
                    to="/advertising"
                    className="link"
                >
                    partnerships
                </Link>
            </div>
        }
        </>
    );
}


export default NavbarComp;