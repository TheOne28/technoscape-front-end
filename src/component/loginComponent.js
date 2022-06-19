import React from "react"
import "./loginComponent.css"
import { Link } from "react-router-dom"

export function Login(props){
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
                <form className="neumorphism">
                    <h2>Log In !</h2>
                    <div className="input-container">
                        <label for="email">Email</label><br/>
                        <input type="email" name="email" className="input" id="email" /><br/>
                    </div>
                    <div className="input-container">
                        <label for="username">Username</label><br/>
                        <input type="text" id="Username" className="input" name="fullname" /><br/>
                    </div>
                </form>
            </section>

            <section className="buttonsubmit">
                <button className="submitBtn">
                    <i className="fa-solid fa-check"></i>
                </button>
            </section>

            <section className="toLogInPage">
                <p>Baru pertama kali? Silahkan lakukan <Link to="/signup">Sign Up</Link></p>
            </section>
        </>
    )
}