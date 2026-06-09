import { Navigate, Route, Routes } from "react-router"

import { MainPage } from "../pages/MainPage/MainPage"
import { LoginPage } from "../pages/LoginPage/LoginPage"
import { RegisterPage } from "../pages/RegisterPage/RegisterPage"
import { CardPage } from "../pages/CardPage/CardPage"
import { AddCardPage } from "../pages/AddCardPage/AddCardPage"
import { ExitPage } from "../pages/ExitPage/ExitPage"
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage"

export function AppRoutes({ isAuth, setIsAuth }) {
    return (
        <Routes>
        <Route path="/" element={isAuth ? <MainPage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/card/:id" element={isAuth ? <CardPage /> : <Navigate to="/login" />} />
        <Route path="/add-card" element={isAuth ? <AddCardPage />  : <Navigate to="/login" />} />
        <Route path="/exit" element={isAuth ? <ExitPage setIsAuth={setIsAuth} /> : <Navigate to="/login" />} />
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}