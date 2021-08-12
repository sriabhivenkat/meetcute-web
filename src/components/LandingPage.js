import React from 'react'
import { Link } from 'react-router-dom';
import './Landing.css';


const LandingPage = () => {
    return(
        <div className="heroContainer">
            <div className="navbar1">
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
            <div className="heroContainer1">
                    <div className="textContainer">
                        <h1 style={{fontFamily: "Inter", color: "white", fontWeight: "700"}}>
                            welcome to meetcute.
                        </h1>
                        <h5 style={{marginLeft: 5, fontWeight: "300", fontFamily: "Inter", color: "white", marginTop: 20}}>
                            we've got a little something for everyone.
                        </h5>
                    </div>
            </div>
        </div>
    )
}

export default LandingPage;