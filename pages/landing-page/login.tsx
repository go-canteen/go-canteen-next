import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

export default function Login() {
    return (
        <>
            <header>Login</header>
            <form action="/api/user/form" method="post">
                <label htmlFor="first">First Name</label>
                <input type="text" id="first" name="first" required />

                <label htmlFor="last">Last Name</label>
                <input type="text" id="last" name="last" required />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
