import Footer from '@/components/footer/Footer';
import Navbar from '@/components/header/Navbar.jsx';
import React from 'react';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;