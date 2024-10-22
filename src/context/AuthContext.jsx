import React from 'react';
import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

// hier maak je de context, deze export zorgt ervoor dat e je kan "aboneren" op de data
export const AuthContext = createContext ({});

// (wrapper voor app) provider component om om heel de app te wrappen en zo te gebruiken overal
function AuthContextProvider({children}) {

    // (oefen data object)
   //  // dataobject
   // const contextData = {
   //     banaan:"banaan",
   //     appel:"appel",
   //     // key/keyvalue
   // }

    const [isAuth, setIsAuth]= useState (false);
    const navigate = useNavigate();

    function login(){
        console.log(`logged in`);
        setIsAuth(true);
        navigate('/profile');
    }

    function logout() {
        console.log(`logged out`);
        setIsAuth(false);
        navigate(`/`);
    }


    const contextData = {
        isAuth: isAuth,
        login: login,
        logout: logout,
    };




    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}



export default AuthContextProvider;