import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../components/LoginPage";
import ChatPage from "../components/ChatPage";
import NotFoundPage from "../components/NotFoundPage";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<PublicRoute > <LoginPage /> </PublicRoute> } />
                    <Route path="/chat" element={<PrivateRoute > <ChatPage /> </PrivateRoute>} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;
