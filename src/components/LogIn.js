import React, {useRef} from 'react'
import './LogIn.css'
import { useState } from 'react'
import { supabase } from '../supabaseClient.js'
import Button from 'react-bootstrap/Button';

const LogIn = () => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')


    const handleLogin = async (email) => {
        try {
          setLoading(true)
          const { error } = await supabase.auth.signIn({ email })
          if (error) throw error
          alert('Check your email for the login link!')
        } catch (error) {
          alert(error.error_description || error.message)
        } finally {
          setLoading(false)
        }
    }

    return(
        <>
            <div className="loginContainer1">
                <div className="logincard">
                    <div>
                        <h1
                            style={{
                                fontFamily: "Inter",
                                color: "white"
                            }}
                        >
                            log in
                        </h1>
                    </div>
                    <div className="logininputContainer">
                        <input
                            className="logininputField"
                            type="email"
                            placeholder="enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                paddingLeft: 10
                            }}
                        />
                    </div>
                    <div>
                        <Button 
                            variant="dark" 
                            size="lg"
                            onClick={(e) => {
                                e.preventDefault()
                                handleLogin(email)
                            }}
                            disabled={loading}
                            className="loginButton"
                        >
                            {loading ? <span>Loading</span> : <span>let's go!</span>}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogIn;