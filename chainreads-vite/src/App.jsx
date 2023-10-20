import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import { Route, Routes } from "react-router-dom";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";
import BorrowBookForm from "./components/BorrowBookForm";
import ReturnBookForm from "./components/ReturnBookForm";

export default function Home() {
    return (
        // <AddBookForm />
        <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/add" element={<AddBookForm />} />
            <Route path="/borrow" element={<BorrowBookForm />} />
            <Route path="/return" element={<ReturnBookForm />} />
        </Routes>
    );
}
