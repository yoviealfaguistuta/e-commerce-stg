import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../../../assets/img/logo/logo-dark.svg";
import login_logo from "../../../assets/img/logo/login.svg";
import facebook from "../../../assets/img/logo/facebook.svg";
import google from "../../../assets/img/logo/google.svg";
import register from "./register";
import UseGoogleAuth from './useGoogleAuth';
import UseFacebookAuth from './useFacebookAuth';
import { Link } from "react-router-dom";
import Home from "../../home";
import Cookies from 'universal-cookie';



function Login() {
    // const { isSignedIn, user, handleLogin } = UseGoogleAuth();
    // const { isAuthenticated, userFb, handleLoginFb, handleLogout } = UseFacebookAuth();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState('');


    const userLogin = async (event) => {
        const cookies = new Cookies();
        event.preventDefault();

        axios
            .post('https://dummyjson.com/auth/login', {
                username,
                password
            })
            .then(function (response) {
                console.log('response :>> ', response);
                cookies.set('token', response.data.token, { path: '/' });
                cookies.set('image', response.data.image, { path: '/' });
                window.location.href = '/';

            }).catch(function (error) {
            }).finally(function () {
            });

    }



    return (

        <>
            {/*breadcrumbs area start*/}
            <div className="breadcrumbs_area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_content">
                                <div className="login_logo_container">
                                    <a href="/"><img className="logo-dark-main" src={logo} alt="" /></a>
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
                                        <h2>login</h2>
                                        <form onSubmit={userLogin} action="/" className="card_login">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-6">
                                                    <p>
                                                        <label>Phone Number or Email <span>*</span></label>
                                                        <input type="text" placeholder={+62} name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                                    </p>
                                                    <p>
                                                        <label>Password <span>*</span></label>
                                                        <input type="text" placeholder={""} value={password} onChange={(e) => setPassword(e.target.value)} />
                                                    </p>
                                                    <div className="login_submit">
                                                        <a href="">Lost your password?</a>
                                                        <label htmlFor="remember">
                                                            <input id="remember" type="checkbox" />
                                                            Remember me
                                                        </label>
                                                        <button type="submit" value="Login">Login</button>
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
                                                    <div className="container_login_button" >
                                                        <img className="image_login" src={google} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12 col-md-6 mt-3">
                                                    <Link to='/register'>Register Here</Link>
                                                </div>
                                            </div>
                                            {message && <p>{message}</p>}

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

        </>




    );
}
export default Login;