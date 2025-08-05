import LoadSpinner from "@components/LoadSpinner.tsx";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@stores/authStore";

interface ProtectedRouteProps {
    isLoading: boolean;
}

export default function ProtectedRoute({ isLoading }: ProtectedRouteProps) {
    const { isAuthenticated } = useAuthStore();

    if (isLoading) {
        return <LoadSpinner />;
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
