import React from "react"
import "./signUpComponent.css"
import { Link } from "react-router-dom"

export function SignUp(props){
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
                    Selamat datang !
                </h1>
            </section>

            <section className="form">
                <form className="neumorphism">
                    <h2>Sign Up !</h2>
                    <div className="input-container">
                        <label for="email">Email</label><br/>
                        <input type="email" name="email" className="input" id="email" /><br/>
                    </div>
                    <div className="input-container">
                        <label for="username">Username</label><br/>
                        <input type="text" id="Username" className="input" name="fullname" /><br/>
                    </div>
                    <div className="input-container">
                        <label for="password">Password</label><br/>
                        <input type="password" name="password" className="input" id="password" /><br/>
                    </div>
                </form>
            </section>

            <section className="buttonsubmit">
                <button className="submitBtn">
                    <i className="fa-solid fa-check"></i>
                </button>
            </section>

            <section className="toLogInPage">
                <p>Sudah pernah di sini? Lakukan <Link to="/login">Log In</Link></p>
            </section>
        </>
    )
}