import React, { Fragment } from 'react'
import { Header } from './Header';
import { Footer } from './Footer';
import Cookies from 'universal-cookie';


export const Layout = ({ children }) => {
    const cookies = new Cookies();
    console.log(cookies.get('token'));
    console.log(cookies.get('image'));


    return (
        <>
            <div>
                <div className="off_canvars_overlay" />
                <Header />
                {children}
                <Footer />
            </div>
        </>
    )
};