import React from 'react';
import logo from "../assets/images/more/logo1.png";

const Navbar = () => {
    return (
        <div className='bg-backgroundAccent h-12 flex gap-2 justify-center items-center font-rancho text-4xl text-textSecondary'>
            <img src={logo} alt="logo"  className='h-12'/>
            <h1 >Coffee Park</h1>
        </div>
    );
};

export default Navbar;