import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer";
import "styles/layout.css";


const Layout: FC = () => {
    return (
        <>
            <Header />
            <main className="layout">
            <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;