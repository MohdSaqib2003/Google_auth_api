import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from 'next-auth/providers/github'

// const CLIENT_ID = "894827037089-li3phn8m55qg1og4c92dj57i46euoh2j.apps.googleusercontent.com";
// const CLIENT_SECRET = "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";

const GOOGLE_CLIENT_ID="545719820225-hp6af5eilud5odmaa5jli9nr0apk7t3p.apps.googleusercontent.com";

const GOOGLE_CLIENT_SECRET="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";



export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
        clientId: "process.env.GITHUB_ID",
        clientSecret: "process.env.GITHUB_SECRET",
      })
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)