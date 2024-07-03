import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ProtectedRoute} from "./ProtectedRoute.tsx";
import {NotFound} from "../pages/NotFound.tsx";
import {Unauthorized} from "../pages/Unauthorized.tsx";
import {useAuth} from "../hooks/useAuth.tsx";
import {Dashboard} from "../pages/Dashboard.tsx";
import {Landing} from "../pages/Landing.tsx";
import {Settings} from "../pages/Settings.tsx";

const Routes = () => {
    const AuthContext = useAuth();

    const routesForPublic = [
        {
            path: "/*",
            element: (
                <NotFound/>

            ),
        },
    ];

    const authOnlyRoutes = [
        {
            path: "/",
            element: (
                <ProtectedRoute/>
            ),
            children: [
                {
                    path: "/",
                    element: (
                        <Dashboard/>
                    ),
                },
                {
                    path: "/settings/*",
                    element: (
                        <Settings/>
                    ),
                },
            ],
        },
    ];

    const notAuthOnlyRoutes = [
        {
            path: "/",
            element: (
                <Landing/>
            ),
        },
        {
            path: "/401",
            element: (
                <Unauthorized/>
            ),
        },
    ];

    const router = createBrowserRouter([
        ...routesForPublic,
        ...(AuthContext?.isAuthenticated
            ? authOnlyRoutes
            : notAuthOnlyRoutes),
    ]);

    return <RouterProvider router={router}/>;
};
export default Routes;
