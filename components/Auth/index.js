import React,{ useState } from 'react'
import Login from './Login';
import Signout from './Signout';

const Auth = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    console.log("statue : ",isSignedIn);
    return (
        <>
            <Login isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}/>
            <Signout isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}/>
        </>
    )
}

export default Auth;