import React, { Fragment } from 'react'
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({children}) => {
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