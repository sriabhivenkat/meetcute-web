import React, {useRef} from 'react'
import NavbarComp from '../Navbar'
import Career from '../Career.js'



const Careers = () => {
    document.title="Team"
    return(
        <div>
            <NavbarComp />
            <Career />
        </div>
    )
}

export default Careers;