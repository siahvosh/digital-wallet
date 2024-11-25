import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
    authToken: string | null;
    login: (token: string) => void;
    logout: () => void;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

    const [authToken, setAuthToken] = useState<string | null>(
        localStorage.getItem('accessToken'),
    );

    const login = (token: string) => {
        localStorage.setItem('accessToken', token);
        setAuthToken(token);
    };

    const logout = () => {
        localStorage.removeItem('accessToken');
        setAuthToken(null);
    };

    return (
        <AuthContext.Provider value={{ authToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};
