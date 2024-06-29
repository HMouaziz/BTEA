import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ProtectedRoute} from "./ProtectedRoute.tsx";
import {NotFound} from "../pages/NotFound.tsx";
import {Unauthorized} from "../pages/Unauthorized.tsx";
import {useAuth} from "../hooks/useAuth.tsx";

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
                        <>haha</>
                    ),
                },
                {
                    path: "/profile",
                    element: (
                        <>prof</>
                    ),
                },
                {
                    path: "/settings/*",
                    element: (
                        <>sett</>
                    ),
                },
            ],
        },
    ];

    const notAuthOnlyRoutes = [
        {
            path: "/",
            element: (
                <>hihi</>
            ),
        },
        {
            path: "/login",
            element: (
                <>lol</>
            ),
        },
        {
            path: "/register",
            element: (
                <>omg</>
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
