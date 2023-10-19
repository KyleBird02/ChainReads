import React, { useContext, createContext } from "react";
import {
    useAddress,
    useContract,
    useMetamask,
    useContractWrite,
    useContractRead,
} from "@thirdweb-dev/react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { contract } = useContract(
        "0x9De2D702D2Ee5A978F3dB8c10A08A3B6efEf4467"
    );

    const { mutateAsync: addBook, isLoading: addBookLoading } =
        useContractWrite(contract, "addBook");

    const { mutateAsync: borrowBook, isLoading: borrowBookLoading } =
        useContractWrite(contract, "borrowBook");

    const { mutateAsync: returnBook, isLoading: returnBookLoading } =
        useContractWrite(contract, "returnBook");

    const { data: books, isLoading: booksLoading } = useContractRead(
        contract,
        "books",
        []
    );

    const addres = useAddress();
    const connect = useMetamask();

    const addBookCall = async (title, author) => {
        try {
            const data = await addBook({ args: [title, author] });
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    };

    const borrowBookCall = async (id) => {
        try {
            const data = await borrowBook({ args: [id] });
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    };

    const returnBookCall = async (id) => {
        try {
            const data = await returnBook({ args: [id] });
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    };

    return (
        <StateContextProvider
            value={{
                addres,
                connect,
                contract,
                addBook: addBookCall,
                borrowBook: borrowBookCall,
                returnBook: returnBookCall,
                books,
                isLoading: booksLoading,
                addBookLoading,
                borrowBookLoading,
                returnBookLoading,
            }}
        >
            {children}
        </StateContextProvider>
    );
};

export const useStateContext = () => useContext(StateContext);
