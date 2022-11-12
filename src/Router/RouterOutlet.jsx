import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import NotFound from "../pages/NotFound"

function RouterOutlet() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<NotFound/>} />
            {/* Other routes here... */}
        </Routes>
    );
}

export default RouterOutlet;