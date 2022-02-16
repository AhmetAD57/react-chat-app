import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../components/LoginPage";
import ChatPage from "../components/ChatPage";
import NotFoundPage from "../components/NotFoundPage";

import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<LoginPage /> } />
                    <Route path="/chat" element={<PrivateRoute > <ChatPage /> </PrivateRoute>} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;
