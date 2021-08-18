import React, {useRef} from 'react'
import Market from '../Market'
import NavbarComp from '../Navbar'



const Marketplace = () => {
    document.title="Meetcute"
    return(
        <div>
            <NavbarComp />
            <Market />
        </div>
    )
}

export default Marketplace;