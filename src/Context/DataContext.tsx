import React, { createContext, useContext, useState, ReactNode } from 'react';

type DataContextType = {
    data?: any;
    setData?: (data: any) => void;
    phoneNumber?: string,
    setPhoneNumber?: any,
    balance?: string,
    setBalance?: any,
    currency?: string,
    setCurrency?: any,
    walletId?: string,
    setWalletId?: any,
    callbackStatus?: any,
    setCallbackStatus?: any,
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<any>(false);
    const [phoneNumber, setPhoneNumber] = useState<string>();
    const [balance, setBalance] = useState<string>();
    const [currency, setCurrency] = useState<string>();
    const [walletId, setWalletId] = useState<string>();
    const [callbackStatus, setCallbackStatus] = useState<string>();

    return (
        <DataContext.Provider
            value={{
                data, setData,
                phoneNumber, setPhoneNumber,
                balance, setBalance,
                currency, setCurrency,
                walletId, setWalletId,
                callbackStatus, setCallbackStatus
        }}>
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