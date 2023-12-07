// The "use client"; pragma is used to indicate that this code should be executed on the client-side in a Next.js application.
"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
// Importing the Link component from the Next.js library to handle client-side navigation.
import Link from "next/link";
import { useRouter } from "next/navigation";
// Importing the useRouter hook from Next.js to access the router object for navigation.

const Register = () => {
    const [error, setError] = useState(null);

    // Creating a router object using the useRouter hook to handle client-side navigation.
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Extracting the values of the name, email, and password from the form.
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try {
            // Sending a POST request to the "/api/auth/register" endpoint with the user's registration information.
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });
            // If the registration is successful (HTTP status code 201), redirecting the user to the login page with a success query parameter.
            res.status === 201 && router.push("/dashboard/login?success=Account has been created");
        } catch (err) {
            setError(err);
            console.log(err);
        }
    };

    // Beginning of the JSX markup returned by the Register component.
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Create an Account</h1>
            <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    placeholder="Username"
                    required
                    className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Email"
                    required
                    className={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    className={styles.input}
                />
                <button className={styles.button}>Register</button>
                {error && "Something went wrong!"}
            </form>
            <span className={styles.or}>- OR -</span>
            <Link className={styles.link} href="/dashboard/login">
                Login with an existing account
            </Link>
        </div>
    );
};

export default Register;