import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound"
import Start from "../pages/Start";

function RouterOutlet() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/start" element={<Start/>} />
            <Route path="*" element={<NotFound/>} />
            {/* Other routes here... */}
        </Routes>
    );
}

export default RouterOutlet;