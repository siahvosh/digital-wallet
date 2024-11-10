import React, { createContext, useContext, useState, ReactNode } from 'react';

type DataContextType = {
    data: any;
    setData: (data: any) => void;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<any>(null);

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData باید داخل WalletProvider استفاده شود");
    }
    return context;
};