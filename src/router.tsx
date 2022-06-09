import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "components/Layout";
import Home from "pages/Home";

const AppRouter: FC = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
}

export default AppRouter;