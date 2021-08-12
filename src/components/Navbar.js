import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function NavbarComp() {
    return(
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
            <Link 
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
            </Link>
            <Link
                to="/team"
                style={{
                    fontFamily: "Inter",
                    fontWeight: "600",
                    color: "white",
                    fontSize: 20,
                    marginLeft: 100,
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
        </div>
    );
}


export default NavbarComp;