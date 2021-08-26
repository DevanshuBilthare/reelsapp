import React, {useEffect, useContext} from 'react'
import { authContext } from '../Context/AuthProvider';
import {signInWithGoogle, auth} from '../Firebase/firebase';
import  {Redirect} from  'react-router-dom'

const Login = () => {

    let user = useContext(authContext);

    return (
        <>
        {user ? <Redirect  to = "/" /> : ""}
            <button 
                onClick = {() => {signInWithGoogle()}} 
                className = "btn btn-primary m-4"
            >
                Sign in with Google
            </button>
            <button
                onClick={() => {
                auth.signOut();
                }}
            >
                LOGOUT
            </button>
        </>
    )
}

export default Login;
