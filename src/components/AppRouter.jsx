import React, { useContext } from "react";
import {BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import { AuthContext } from "../context";
import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import { routes } from "../router/routes";
import { publicRoutes, privateRoutes } from "../router/routes";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map((route, pos) =>
                    <Route
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                        key={pos}
                    />
                )}
                <Route path="*" element={<Posts />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map((route, pos) =>
                    <Route
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                        key={pos}
                    />
                )}
                <Route path="*" element={<Login />} />
            </Routes>
    );
};

export default AppRouter;