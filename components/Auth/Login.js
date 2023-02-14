import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { GoogleLogout } from '@react-oauth/google';

// const CLIENT_ID = "894827037089-1d732g1bjmdpet8edmfoe5ht8580r9e7.apps.googleusercontent.com"

const Login = () => {

  const onSuccess = (response)=>{
    console.log(response);
  }

  const onLogout = (e)=>{
    //   googleLogout();
      console.log("Log clicked : ",e);
  }

  return (
    <div>
        <h1>Hello Login</h1>
    {/* <GoogleLogin
  onSuccess={credentialResponse => {
    console.log("CRED : ",credentialResponse);
    console.log("CRED : ",credentialResponse.credential);
  }}
  onError={() => {
    console.log('Login Failed')
  }}
  
/> */}

    </div>
  )
}

export default Login;






// // import React from 'react'
// // import { GoogleLogin } from 'react-google-login';

// // const CLIENT_ID = "894827037089-1d732g1bjmdpet8edmfoe5ht8580r9e7.apps.googleusercontent.com"

// // const Login = ({ isSignedIn, setIsSignedIn }) => {
    
// //     const onSuccess = (response) => {
// //         setIsSignedIn(true);
// //         console.log("Login success : ", response);
// //     }
    
// //     const onFailure = (response) => {
// //         setIsSignedIn(false);
// //         console.log("login failure: ", response);
// //     }

// //     return (
// //         <>
// //             {/* {isSignedIn ? <></> : */}

// //             <GoogleLogin
// //                 clientId={CLIENT_ID}
// //                 buttonText="Login"
// //                 onSuccess={onSuccess}
// //                 onFailure={onFailure}
// //                 cookiePolicy={'single_host_origin'}
// //             />

// //             {/* } */}

// //         </>
// //     )
// // }

// // export default Login;