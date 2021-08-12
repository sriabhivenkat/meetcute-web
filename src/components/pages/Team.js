import React, {useRef} from 'react'
import NavbarComp from '../Navbar'
import Teams from '../Teams'



const Team = () => {
    document.title="Team"
    return(
        <div>
            <NavbarComp />
            <Teams />
        </div>
    )
}

export default Team;