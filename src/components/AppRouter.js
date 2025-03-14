import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import { publicRoutes, authRoutes, adminRoutes } from "../routes";
import { LOGIN_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { findOneUser } from "../http/userAPI";
import { jwtDecode } from "jwt-decode";


const AppRouter = observer(() => {
    let isAuth = localStorage.getItem("token")
    let isAdmin = false
    if(isAuth){
        const decodedToken = jwtDecode(isAuth)
        decodedToken.role === 'admin' ? isAdmin = true : isAdmin = false
    }
    return (
        <Routes>
            {
                isAuth && authRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={Component}
                        exact />
                )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={Component}
                    exact />
            )}
            {
                isAuth && isAdmin && adminRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={Component}
                        exact />
                )}
            <Route path="*" element={<Navigate replace to={LOGIN_ROUTE} />} />
        </Routes>
    )
});
export default AppRouter;