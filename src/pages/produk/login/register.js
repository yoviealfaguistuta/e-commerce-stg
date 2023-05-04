import React, { Fragment,useState } from "react";
import logo from "../../../assets/img/logo/logo-dark.svg";
import login_logo from "../../../assets/img/logo/login.svg";
import facebook from "../../../assets/img/logo/facebook.svg";
import google from "../../../assets/img/logo/google.svg";
import { useNavigate } from 'react-router-dom';

import axios from 'axios';




function Register() {
    const [username, setUsername] = React.useState('saya');
    const [password, setPassword] = React.useState();
    const [email, setEmail] = React.useState();
    const [phone, setPhone] = React.useState();
    const [address, setAddress] = React.useState();

      let navigate = useNavigate();

      

      const addregister= (e) => {
        e.preventDefault();
        axios.post('https://dummyjson.com/users/add', {
            username:username,
            password:password,
            email:email,
            phone:phone,
            address:address,
        }).then(function (response) {
            return navigate("/login");
        }).catch(function (error) {

        }).finally(function () {

        });
    }
    return (
        <>
            <div>
                {/*breadcrumbs area start*/}
                <div className="breadcrumbs_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb_content">
                                    <div className="login_logo_container">
                                        <a href=""><img className="logo-dark-main" src={logo} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/*breadcrumbs area end*/}
                {/* customer login start */}
                <div className="login_page_bg">
                    <div className="container">
                        <div className="customer_login">
                            <div className="container_login_wrapper">
                                <div className="row">
                                    {/*login area start*/}
                                    <div className="col-lg-6 col-md-6">
                                        <div className="container_image_login">
                                            <img className="image_login" src={login_logo} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="account_form login">
                                            <h2>Register</h2>
                                            <form action="javascript:redirect()" onSubmit={addregister} className="card_login">
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-6">
                                                        <p>
                                                            <label>Nama <span>*</span></label>
                                                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                                                        </p>
                                                        <p>
                                                            <label>Alamat <span>*</span></label>
                                                            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
                                                        </p>
                                                        <p>
                                                            <label>No Hendphone <span>*</span></label>
                                                            <input type="text" placeholder={+62} value={phone} onChange={(e) => setPhone(e.target.value)} />
                                                        </p>
                                                        <p>
                                                            <label>E-mail <span>*</span></label>
                                                            <input type="text" placeholder={""} value={email} onChange={(e) => setEmail(e.target.value)} />
                                                        </p>
                                                        <p>
                                                            <label>Password <span>*</span></label>
                                                            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                        </p>
                                                        <div className="login_submit">                                            
                                                            <button type="submit">Register now</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="border-divider" />
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 container_sign_inwith">
                                                        <span className="sign_inwith">or sign in with</span>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="border-divider" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="container_login_button">
                                                            <img className="image_login" src={facebook} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="container_login_button">
                                                            <img className="image_login" src={google} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-6 mt-3">
                                                        <a href="http://127.0.0.1:8000/Za2Xaw11">Login Here</a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/*login area start*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/* customer login end */}
                {/*footer area start*/}
                <footer className="footer_widgets" style={{ borderTop: '1px solid #ebebeb' }}>
                    <div className="footer_bottom">
                        <div className="container">
                            <div className="row align-items-center ">
                                <div className="col-lg-12 col-md-6 ">
                                    <div className="copyright_area" style={{ marginLeft: '20px' }}>
                                        <p><span style={{ color: 'red', fontWeight: 'bolder' }}>Beta</span> Version - Copyright © 2021
                                            <a href="http://microdataindonesia.co.id/">Microdata Indonesia</a> All Right Reserved.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </>

    );

}
export default Register;