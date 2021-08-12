import React, {useRef} from 'react'
import { CardGroup } from 'react-bootstrap';
import './News.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

const News = () => {
    return(
        <>
            <div className="newsContainer1">
                <h1 style={{fontFamily: "Inter"}}>meetcute newsroom</h1>
            </div>
            <div className="newsContainer2">
                <h2>stories from college station, texas</h2>
            </div>
        </>
    )
}

export default News