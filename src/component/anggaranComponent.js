import React, { useRef, useState } from "react"
import { useAuth } from "../context/authContext"
import { Link, useNavigate } from "react-router-dom"
import "./anggaranComponent.css"

export function Anggaran(props){
    return(
        <>
            <section className="branch">
                <section className="navigation">
                    <div className="logoAnggaran">
                        <i className="fa-solid fa-wallet"></i>
                        PortoMata
                    </div>
                    <div className="navigationAnggaran">
                        <div className="containNav">
                            <img src="./icons/dashboard.svg" alt=""/>
                            Beranda
                        </div>
                        <div className="containNav">
                            <img src="./icons/invoices.svg" alt=""/>
                            Anggaran
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
                    <div className="pengaturanAnggaran">
                        <div className="containNav">
                            <img src="./icons/settings.svg" alt=""/>
                            Pengaturan
                        </div>
                        <div className="containNav">
                            <img src="./icons/help.svg" alt=""/>
                            Bantuan
                        </div>
                    </div>
                    <div className="logOutAnggaran">
                        <img src="./icons/Vector.svg" alt=""/>
                        <Link to="/">Log Out</Link>
                    </div>
                </section>

                <section className="mainAnggaran">
                    <div className="anggaranTerkumpul">
                        <div className="tulisanAnggaran">
                            <h1>Anggaran untuk</h1>
                        </div>
                        <div className="nominalAnggaran">
                            <input type="date" id="bulanApa" name="bulanApa"/>
                        </div>
                    </div>

                    <div className="tampungAnggaranMain">
                        <div className="anggaranNabung">
                            <div className="individualNabung">
                                <div className="bulanTabung">
                                    <h2>Juli</h2>
                                    <h3>Rp10.000.000</h3>
                                </div>
                                <div className="deskripsiNabung">
                                    <progress id="file" value="32" max="100"> 32% </progress>
                                </div>
                            </div>
                        </div>
                        <div className="kategoriAnggaran">
                            <div className="tujuanAnggaranBulan">
                                <img src="./icons/chart.svg" alt=""/>
                                <p>Belanja</p>
                                <p>Rp50.000</p>
                            </div>
                        </div>
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