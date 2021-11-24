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
                <h2 style={{marginTop: 40}}>what is meetcute?</h2>
                <div className="paragraph">
                    <h3>meetcute is a way to create memory boards for all of your adventures</h3>
                    <div style={{marginTop: 10}}></div>
                    <p>
                        meetcute is a platform that allows you to create your very own adventure.
                        you can go on your very own adventure and share it with your friends. post adventures you
                        go on. create memory boards of these adventures you go on. what's important is you made a memory
                        that'll be there for the rest of your life. that's all that matters, really.
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