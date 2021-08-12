import React, {useRef} from 'react'
import NavbarComp from '../Navbar'
import News from '../News'


const Newsroom = () => {
    document.title="Meetcute"
    return(
        <div>
            <NavbarComp />
            <News />
        </div>
    )
}

export default Newsroom;