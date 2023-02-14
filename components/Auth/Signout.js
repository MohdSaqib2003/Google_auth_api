import React from 'react'
import { GoogleLogout } from 'react-google-login';

const CLIENT_ID = "894827037089-1d732g1bjmdpet8edmfoe5ht8580r9e7.apps.googleusercontent.com";

const Signout = ({ isSignedIn, setIsSignedIn }) => {
    const onLogout = (response) => {
        setIsSignedIn(false);
        console.log("logout success",response);
    }
    return (
        <>
         { !isSignedIn ? <></> :
            <GoogleLogout
                // clientId="1076361957690-9knar4vo6b4l3p4safh4a07f5nclqkn8.apps.googleusercontent.com"
                clientId={CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={onLogout}
            ></GoogleLogout>
        }
        </>
    )
}

export default Signout