import React, {useRef} from 'react'
import NavbarComp from '../Navbar'
import Investor from '../Investor'

const Investors = () => {
    document.title="Meetcute"
    return(
        <div>
            <NavbarComp />
            <Investor />
        </div>
    )
}

export default Investors;