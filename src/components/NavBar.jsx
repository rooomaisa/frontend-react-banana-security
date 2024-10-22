import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import { useNavigate, Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function NavBar() {
  const navigate = useNavigate();
  const { isAuth, user, logout } = useContext(AuthContext);
  console.log("Authenticatie status:", isAuth);


  return (
    <nav>
        <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
        </Link>

        {isAuth ? (
            <div>
            <span>Welcome, {user}!</span>
            <button
                type="button"
                onClick={logout}

            >
                Log uit
            </button>
            </div>
          ):(
            <div>
                <button
                    type="button"
                    onClick={() => navigate('/signin')}
                >
                    Log in
                </button>
                <button
                    type="button"
                    onClick={() => navigate('/signup')}
                >
                    Registreren
                </button>
            </div>
          )}
    </nav>
  );
}

export default NavBar;