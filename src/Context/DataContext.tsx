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
    amount?: string,
    setAmount?: any,
    cardNumber?: string,
    setCardNumber?: any,
    showCallback?: any
    setShowCallback?: any,
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<any>(false);
    const [phoneNumber, setPhoneNumber] = useState<string>();
    const [balance, setBalance] = useState<string>();
    const [currency, setCurrency] = useState<string>();
    const [walletId, setWalletId] = useState<string>();
    const [callbackStatus, setCallbackStatus] = useState<string>();
    const [amount, setAmount] = useState<string>();
    const [cardNumber, setCardNumber] = useState<string>();
    const [showCallback, setShowCallback] = useState(false);

    return (
        <DataContext.Provider
            value={{
                data, setData,
                phoneNumber, setPhoneNumber,
                balance, setBalance,
                currency, setCurrency,
                walletId, setWalletId,
                callbackStatus, setCallbackStatus,
                amount, setAmount,
                cardNumber, setCardNumber,
                showCallback, setShowCallback,
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