import React from 'react';
import { useSession } from 'next-auth/react';

const About = () => {
    const session = useSession();
    console.log("Session : ",session);
  return (
    <>
    <h1>About</h1>

    </>
  )
}

export default About