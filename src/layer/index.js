import React from 'react';
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'

const Layer = ({children}) => {
    return(
        <>
        <Navbar />
        {children}
        <Footer />
        </>
    )
}

export default Layer