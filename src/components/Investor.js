import React, {useRef} from 'react'
import './Investor.css'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tabs';

const Investor = () => {
    return(
        <>
            <div className="investorContainer1">
                <h1 style={{fontFamily: "Inter"}}>want to invest?</h1>
            </div>
            <div className="investorContainer2">
                <h2 style={{marginTop: 40}}>what is pixlist?</h2>
                <div className="paragraph">
                    <h3>pixlist is a place to hang out with friends through pictures and memory boards</h3>
                    <div style={{marginTop: 10}}></div>
                    <p>
                        pixlist is a place to chill. it's a place where you don't have to worry about
                        being exhausted by social media. pixlist is the app to use when you wanna see
                        what your friends are up to, and tag them on adventures. 
                    </p>
                    <p><b>download now on the app store and the google play store!</b></p>
                </div>
            </div>
            <div className="investorContainer3">
                <Tabs 
                    defaultActiveKey="profile" 
                    id="uncontrolled-tab-example" 
                    className="mb-3"
                >
                    <Tab eventKey="monthlyactiveusers" title="growth">
                        <h1 style={{color: "lightgray"}}>no data yet.</h1> 
                    </Tab>
                    <Tab eventKey="retention" title="retention analytics">
                        <h1 style={{color: "lightgray"}}>no data yet.</h1> 
                    </Tab>
                    <Tab eventKey="financial" title="financials">
                        <h1 style={{color: "lightgray"}}>no data yet.</h1> 
                    </Tab>
                    <Tab eventKey="projections" title="projections">
                        <h1 style={{color: "lightgray"}}>no data yet.</h1> 
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default Investor;