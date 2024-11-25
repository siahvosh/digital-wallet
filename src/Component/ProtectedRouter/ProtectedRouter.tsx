import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { authToken } = useAuth();

    if (!authToken) return <Navigate to="/login" replace />;

    return <>{children}</>
};

export default ProtectedRoute;
