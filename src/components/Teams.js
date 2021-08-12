import React from 'react'
import { Link } from 'react-router-dom';
import './Team.css';
import Button from 'react-bootstrap/Button';


const Teams = () => {
    return(
        <>
            <div className="teamContainer1">
                <h1>meetcute is a group project.</h1>
                <div className="explanation">
                    <h3>
                        that means no one has a role.
                    </h3>
                    <h3>
                        everyone pitches in a little and we roll from there.
                    </h3>
                </div>
            </div>
            <div className="teamContainer2">
                <h2 style={{marginTop: 90}}>this is the a-team. it all began here.</h2>
                <div className="rowComp">
                    <div className="nameComp">
                        <h2 className="gradientText">
                            sriabhi venkat
                        </h2>
                        <h3 style={{fontFamily: "Inter", fontWeight: "300",  fontSize: 20, textAlign: "center"}}>
                            works full-stack to develop app
                        </h3>
                    </div>
                    <div className="nameComp">
                        <h2 className="gradientText">
                            trisha narwekar
                        </h2>
                        <h3 style={{fontFamily: "Inter", fontWeight: "300", fontSize: 20, textAlign: "center"}}>
                            designs ui/ux components
                        </h3>
                    </div>
                    <div className="nameComp">
                        <h2 className="gradientText">
                            kirthivel ramesh
                        </h2>
                        <h3 style={{fontFamily: "Inter", fontWeight: "300",  fontSize: 20, textAlign: "center"}}>
                            plans distribution strategies
                        </h3>
                    </div>
                    <div className="nameComp">
                        <h2 className="gradientText">
                            arkaprabho bose
                        </h2>
                        <h3 style={{fontFamily: "Inter", fontWeight: "300",  fontSize: 20, textAlign: "center"}}>
                            works with backend and databases
                        </h3>
                    </div>
                </div>
            </div>
            <div className="teamContainer3">
                <h2>wanna join?</h2>
                <Button variant="outline-dark" size="lg" href="/careers" style={{fontFamily: "Inter", marginTop: 10,}}>
                    check open roles
                </Button>
            </div>
        </>
    )
}

export default Teams