// import { updateCurrentUser } from 'firebase/auth';
import React, {useState, component} from 'react'


// import {useUserAuth} from "./context/UserAuthContext";

import '../LoginPage/LoginPage.css';
import { Link, useNavigate } from "react-router-dom";

export default function SignUpPage() {
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [password, setPassword] = useState("");
//   const { signUp } = useUserAuth();
// //   let navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await signUp(email, password);
//     //   navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            {/* {error && <alert varient="danger">{error}</alert>} */}
            <form>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required  />
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
    );

};

// export default SignUpPage;