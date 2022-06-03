import React from 'react'
import { Link } from 'react-router-dom'


import './LoginPage.css'

export default function LoginPage() {

    return (
        <div className="text-center m-5-auto">

            <h2>Login To Your Account</h2>
            <form action="/home">


                <p>
                    <label>Email address</label><br />
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br />
                    <input type="password" n ame="password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
