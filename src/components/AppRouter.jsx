import React from "react";
import {BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import { routes } from "../router/routes";
import { publicRoutes, privateRoutes } from "../router/routes";

const AppRouter = () => {
    return (
        <Routes>
            {privateRoutes.map((route, pos) =>
                <Route
                    element={route.element}
                    path={route.path}
                    exact={route.exact}
                    key={pos}
                />
            )}
            {publicRoutes.map((route, pos) =>
                <Route
                    element={route.element}
                    path={route.path}
                    exact={route.exact}
                    key={pos}
                />
            )}
            <Route path="*" element={<Posts />} />
        </Routes>
    );
};

export default AppRouter;