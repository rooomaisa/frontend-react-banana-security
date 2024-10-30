import React, {useContext, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import axios from "axios";
import SignIn from "./SignIn";

function SignUp() {
        const [email, setEmail] = useState('');
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const [loading, setLoading] = useState(false)
        const [error, setError] = useState('')
        const navigate= useNavigate();


       async function handleSubmit (e) {
           e.preventDefault();
           console.log(email, username, password);

           setLoading(true);
           setError('');

           try {
               await axios.post('http://localhost:3000/register', {
                   email: email,
                   password: password,
                   username: username,
               });

               navigate ('/signin');

           } catch (e) {
               console.error(e);
               setError(`Something went wrong: ` + e.message);
           }
        finally {
               setLoading(false);
           }
        }

    return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>

        <form onSubmit={handleSubmit}>
            <label htmlFor={`email-field`}>
                Emailadres:
                <input
                    type={`email`}
                    id={`email-field`}
                    name={`email`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>

            <label htmlFor={`username-field`}>
                Username:
                <input
                    type={`text`}
                    id={`username-field`}
                    name={`username`}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>

            <label htmlFor={`password-field`}>
                Password:
                <input
                    type={`password`}
                    id={`password-field`}
                    name={`password`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button
                type="submit"
                className="form-button"
            >
                Sign-up
            </button>


        </form>
        <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
    );
}

export default SignUp;