
import React, { useRef, useState } from "react"
import { useAuth } from "../context/authContext"
import { Alert } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import "./signUpComponent.css"

export function SignUp(props) {
    const email = useRef()
    const password = useRef()
    const username = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await signup(email.current.value, password.current.value)
            console.log("Sukses")
            history('/login')
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }

    return (
        <>
            <section className="logo">
                <div className="cardcontain">
                    <div className="cardlogo">
                        <i className="fa-solid fa-wallet"></i>
                        PortoMata
                    </div>
                </div>
            </section>

            <section className="selamat">
                <h1>
                    Selamat datang !
                </h1>
            </section>

            <section className="form">
                <form className="neumorphism" onSubmit={handleSubmit}>
                    <h2>Sign Up !</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <div className="input-container">
                        <label htmlFor="email">Email</label><br />
                        <input type="email" name="email" className="input" id="email" ref={email} /><br />
                    </div>
                    <div className="input-container">
                        <label htmlFor="username">Username</label><br />
                        <input type="text" id="Username" className="input" name="fullname" ref={username} /><br />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password</label><br />
                        <input type="password" name="password" className="input" id="password" ref={password} /><br />
                    </div>
                    <div className="buttonsubmit" >
                        <button className="submitBtn" disabled={loading} type="submit">
                            <i className="fa-solid fa-check"></i>
                        </button>
                    </div>
                </form>
            </section>

            <section className="toLogInPage">
                <p>Sudah pernah di sini? Lakukan <Link to="/login">Log In</Link></p>
            </section>
        </>
    )
}