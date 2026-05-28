import Footer from '@/components/footer/Footer';
import Banner from '@/components/header/Banner';
import Header from '@/components/header/Header';
import Navbar from '@/components/header/Navbar.jsx';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            <main>
                {children}
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;