import React, { useRef, useState } from "react"
import "./loginComponent.css"
import {Alert } from "react-bootstrap"
import { getToken, useAuth } from "../context/authContext"
import { Link, useNavigate } from "react-router-dom"

export function Login(props){
    const email = useRef()
    const password = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useNavigate()
  
    async function handleSubmit(e) {
      e.preventDefault()
  
      try {
        setError("")
        setLoading(true)
        await login(email.current.value, password.current.value)
        const token = await getToken()
  
        console.log(`Bearer ${token}`)
        history("/signup")
      } catch {
        setError("Failed to log in")
      }
  
      setLoading(false)
    }

    return(
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
                    Halo !
                </h1>
            </section>

            <section className="form">
                <form className="neumorphism" onSubmit={handleSubmit}>
                    <h2>Log In !</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <div className="input-container">
                        <label htmlFor="email">Email</label><br/>
                        <input type="email" name="email" className="input" id="email" /><br/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="username">Username</label><br/>
                        <input type="text" id="Username" className="input" name="fullname" /><br/>
                    </div>
                </form>
            </section>

            <section className="buttonsubmit">
                <button className="submitBtn" type="submit" disabled={loading}>
                    <i className="fa-solid fa-check"></i>
                </button>
            </section>

            <section className="toLogInPage">
                <p>Baru pertama kali? Silahkan lakukan <Link to="/signup">Sign Up</Link></p>
            </section>
        </>
    )
}