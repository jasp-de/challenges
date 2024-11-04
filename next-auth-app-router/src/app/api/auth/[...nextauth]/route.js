import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/db/mongodb";

import dbConnect from "@/db/connect";
import User from "@/db/models/User";

export const authOptions = {
    // Configure one or more authentication providers
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            // profile(data) {
            //     return {
            //         id: data.id,
            //         name: data.name,
            //         email: data.email,
            //         image: data.avatar_url,
            //         admin: false,
            //         preferedColors: ["#dddddd", "#ffffff"],
            //     };
            // },
        }),
        //     CredentialsProvider({
        //         // The name to display on the sign in form (e.g. "Sign in with...")
        //         name: "Credentials",
        //         credentials: {
        //             email: {
        //                 label: "Email",
        //                 type: "text",
        //                 placeholder: "your email",
        //             },
        //             password: { label: "Password", type: "password" },
        //         },
        //         async authorize(credentials, req) {
        //             console.log("credentials", credentials);
        //             console.log("req", req);
        //             // Add logic here to look up the user from the credentials supplied
        //             if (!credentials.email || !credentials.password) {
        //                 return null;
        //             }

        //             const user = await User.findOne({
        //                 email: credentials.email,
        //             });

        //             // const user = await authOptions.adapter.getUserByEmail(
        //             //     credentials.email
        //             // );

        //             console.log("user", user);

        //             if (user) {
        //                 const isValid = credentials.password === user.password;
        //                 console.log("isValid", isValid);
        //                 if (!isValid) {
        //                     return null;
        //                 }

        //                 console.log(user);
        //                 // Any object returned will be saved in `user` property of the JWT
        //                 return user;
        //             } else {
        //                 // If you return null then an error will be displayed advising the user to check their details.
        //                 return null;

        //                 // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        //             }
        //         },
        //     }),
        //     // ...add more providers here
    ],

    // session: {
    //     strategy: "jwt",
    // },
    // debug: true,

    callbacks: {
        async session({ session, token, user }) {
            session.user.userId = token?.sub ? token?.sub : user.id;
            return session;
        },
    },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
