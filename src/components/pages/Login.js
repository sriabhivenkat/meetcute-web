import React, {useRef} from 'react'
import LogIn from '../LogIn'
import NavbarComp from '../Navbar'


const Login = () => {
    document.title="Meetcute"
    return(
        <div>
            <NavbarComp />
            <LogIn />
        </div>
    )
}

export default Login;