/* Importing the necessary dependencies: NextAuth for handling authentication, 
GithubProvider for GitHub OAuth, CredentialsProvider for credentials-based authentication, 
User model, connect function for connecting to a database, and bcrypt for password hashing. */
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";

// Creating a NextAuth handler using the NextAuth function.
const handler = NextAuth({
    /* Configuring authentication providers. 
    This includes setting up CredentialsProvider for credentials-based authentication, 
    checking the user's email and password against the database, and GithubProvider for GitHub OAuth. */
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials) {
                //Check if the user exists.
                await connect();

                try {
                    const user = await User.findOne({
                        email: credentials.email,
                    });

                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );

                        if (isPasswordCorrect) {
                            return user;
                        } else {
                            throw new Error("Wrong Credentials!");
                        }
                    } else {
                        throw new Error("User not found!");
                    }
                } catch (err) {
                    throw new Error(err);
                }
            },
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    // Configuring a custom error page to redirect users in case of authentication errors.
    pages: {
        error: "/dashboard/login",
    },
});


export { handler as GET, handler as POST };