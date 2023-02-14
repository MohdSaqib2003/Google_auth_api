import Auth from "../components/Auth";
import { GoogleOAuthProvider } from "@react-oauth/google";
import NextAuth from "../components/Auth/NextAuth";
const CLIENT_ID = "894827037089-1d732g1bjmdpet8edmfoe5ht8580r9e7.apps.googleusercontent.com";

export default function Home() {
  return (
    <div>
      <h1>Google API</h1>
      {/* <GoogleOAuthProvider clientId={CLIENT_ID}> */}
        {/* <Auth /> */}
        <NextAuth />
      {/* </GoogleOAuthProvider> */}
    </div>
  )
}
