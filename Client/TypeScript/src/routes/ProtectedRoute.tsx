import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../hooks/useAuth.js";

export const ProtectedRoute = () => {
    const AuthContext = useAuth();

    if (!AuthContext?.isAuthenticated) {
        return <Navigate to="/401" replace />;
    }

    return <Outlet />;
};
