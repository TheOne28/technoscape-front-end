import React, { useRef, useState } from "react"
import { useAuth } from "../context/authContext"
import { Link, useNavigate } from "react-router-dom"
import "./tujuanComponent.css"

export function Tujuan(props){
    return(
        <>
            <section className="branch">
                <section className="navigation">
                    <div className="logoTujuan">
                        <i className="fa-solid fa-wallet"></i>
                        PortoMata
                    </div>
                    <div className="navigationTujuan">
                        <div className="containNav">
                            <img src="./icons/dashboard.svg" alt=""/>
                            Beranda
                        </div>
                        <div className="containNav">
                            <img src="./icons/invoices.svg" alt=""/>
                            Tujuan
                        </div>
                        <div className="containNav">
                            <img src="./icons/wallet.svg" alt=""/>
                            Anggaran
                        </div>
                        <div className="containNav">
                            <img src="./icons/chart.svg" alt=""/>
                            Laporan
                        </div>
                        <div className="containNav">
                            <img src="./icons/transfer.svg" alt=""/>
                            Transaksi
                        </div>
                    </div>
                    <div className="pengaturanTujuan">
                        <div className="containNav">
                            <img src="./icons/settings.svg" alt=""/>
                            Pengaturan
                        </div>
                        <div className="containNav">
                            <img src="./icons/help.svg" alt=""/>
                            Bantuan
                        </div>
                    </div>
                    <div className="logOutTujuan">
                        <img src="./icons/Vector.svg" alt=""/>
                        <Link to="/">Log Out</Link>
                    </div>
                </section>
                <section className="mainTujuan">
                    <div className="tujuanTerkumpul">
                        <div className="tulisanTujuan">
                            <h1>Tujuan Terkumpul</h1>
                        </div>
                        <div className="nominalTerkumpul">
                            <p>Rp9.000.000</p>
                        </div>
                    </div>
                    <div className="tujuanNabung">
                        <div className="individualNabung">
                            <div className="imageNabung">
                                <img src="./icons/Savings.svg" alt=""/>
                            </div>
                            <div className="deskripsiNabung">
                                <div className="deskripsiHead">
                                    <h5>Renovasi Pagar Rumah</h5>
                                    <button><i className="fa-solid fa-pencil"></i></button>
                                </div>
                                <p>Rp100.000</p>
                                <p>/</p>
                                <p>Rp2.000.000</p>
                                <progress id="file" value="32" max="100"> 32% </progress>
                                <p>3%</p>
                                <p>dari sasaran</p>
                            </div>
                        </div>
                        <div className="tambahTujuan"></div>
                    </div>
                </section>
            </section>
            <section className="buttonsubmit">
                <button className="submitBtn">
                    <i className="fa-solid fa-check"></i>
                </button>
            </section>
        </>
    )
}
