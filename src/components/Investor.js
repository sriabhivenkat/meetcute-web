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
                    <p>
                        at our core, we are an app that helps you make memories. 
                        meetcute helps you find date spots and has a list of adventures 
                        for you to go on with friends or with your significant other.
                        we also help you find a significant other. post adventures you
                        go on. save posts to scrapbooks. what's important is you made a memory
                        that'll be there for the rest of your life. that's all that matters, really.
                    </p>
                    <h3>download now on the app store and the google play store!</h3>
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