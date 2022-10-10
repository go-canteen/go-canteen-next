import { SyntheticEvent, useEffect, useState } from "react";

// add bootstrap css 
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

export default function Register() {

    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:8000/registers/', {
            username: username,
            email: email,
            password: password
        }).then(() => { alert('success') })

        // await fetch('http://127.0.0.1:8000/registers/', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': 'http://127.0.0.1:8000/'
        //     },
        //     body: JSON.stringify({
        //         name,
        //         email,
        //         password,
        //     })
        // });

        console.log({ username, email, password });

        await router.push('/login');

    }

    return (
        <>
            <Head>
                <link rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
                    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                    crossOrigin="anonymous">
                </link>
            </Head>

            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong">
                            <div className="card-body p-5 text-center">

                                <h3 className="mb-5">Register</h3>
                                <form onSubmit={submit}>

                                    <input className="form-control form-control-lg mb-4"
                                        placeholder="Name"
                                        value={username}
                                        name="username"
                                        required
                                        onChange={e => setName(e.target.value)}
                                    />

                                    <input type="email" className="form-control form-control-lg mb-4"
                                        placeholder="Email"
                                        value={email}
                                        name="email"
                                        required
                                        onChange={e => setEmail(e.target.value)}
                                    />

                                    <input type="password" className="form-control form-control-lg mb-4"
                                        placeholder="Password"
                                        value={password}
                                        name="password"
                                        required
                                        onChange={e => setPassword(e.target.value)}
                                    />

                                    <button className="btn btn-primary btn-lg btn-block" type="submit">Register</button>
                                </form>
                                <div className="my-4">
                                    Already have an account ? <Link href="login"> Login</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}


