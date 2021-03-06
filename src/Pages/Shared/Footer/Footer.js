import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-4 bg-dark text-white'>
            <p className='mb-0'><small>copyright &copy; {year}</small></p>
        </footer>
    );
};

export default Footer;