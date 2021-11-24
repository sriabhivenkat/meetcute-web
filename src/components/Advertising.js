import React, {useRef} from 'react'
import { CardGroup, Image } from 'react-bootstrap';
import './Advertising.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import image from "../assets/images/image.jpeg"

const Advertising = () => {
    return(
        <>
            <div className="advertisingContainer1">
                <h1 style={{fontFamily: "Inter"}}>advertise or partner with us.</h1>
            </div>
            <div className="advertisingContainer2">
                    <h2>
                        make meetcute work for you.
                    </h2>
                    <div className="cardContainers">
                        <h1 style={{color: "white", fontSize: 45, textAlign: "right", marginRight: 40}}>create your very own Meetcute adventure.</h1>
                        <div className="cards">
                            <h4 style={{color: "white", fontWeight: "300"}}>the different kinds of adventures are shown on a grid. by partnering with us, you can display an adventure related to your brand that people are sure to try.</h4>
                            <h4 style={{color: "white", fontWeight: "300"}}>if your adventure is popular, you can increase sales for your business, whatever the type. press the contact button at the bottom of the page for pricing information.</h4>
                        </div>
                    </div>
                    <div className="cardContainers">
                        <div className="cards1">
                            <h4 style={{color: "white", marginTop: 20, fontWeight: "300"}}>get greater outreach to advertise your products and services with Meetcute Views.</h4>
                            <h4 style={{color: "white", fontWeight: "300"}}>based on the type of ad, we will show your products off for you to the correct type of people, at a much cheaper price than the other major online advertisers</h4>
                        </div>
                        <h1 style={{color: "white", fontSize: 45}}>reach your audience with Meetcute Views.</h1>
                    </div>
                    <div className="cardContainers">
                        <h1 style={{color: "white", fontSize: 45, textAlign: "right", marginRight: 40}}>boost your business at Meetcute Festivals.</h1>
                        <div className="cards">
                            <h4 style={{color: "white", marginTop: 20, fontWeight: "300"}}>by becoming an official vendor for Meetcute Festivals, you have the opportunity to sell anything you'd like, with meetcute taking a 15% cut of total profits.</h4>
                        </div>
                    </div>
                    <div className="cardContainers">
                        <div className="cards1">
                            <h4 style={{color: "white", marginTop: 20, fontWeight: "300"}}>sell gifts of all kind for people to buy on Meetcute Plaza.</h4>
                            <h4 style={{color: "white", fontWeight: "300"}}>sell gifts for people of all sorts of personalities for romantic holidays or anniversaries.</h4>
                        </div>
                        <h1 style={{color: "white", fontSize: 45}}>sell gifts on Meetcute Plaza</h1>
                        <h2 style={{color: "lightgray", fontSize: 25}}>coming soon</h2>
                    </div>
            </div>
            <div className="advertisingContainer3">
                <h1 style={{fontSize: 50}}>here's where it all begins.</h1>
                <h2>log in to your meetcute account</h2>
                <div style={{flexDirection: "row"}}>
                    <Button variant="outline-dark" size="lg" href="/login" style={{fontFamily: "Inter", marginTop: 10, marginRight: 10}}>
                        log in
                    </Button>
                    <Button variant="outline-dark" size="lg" href="/signup" style={{fontFamily: "Inter", marginTop: 10,}}>
                        sign up
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Advertising