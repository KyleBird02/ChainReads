import React from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";
import BorrowBookForm from "./components/BorrowBookForm";
import ReturnBookForm from "./components/ReturnBookForm";

function App() {
    return (
        <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/add" element={<AddBookForm />} />
            <Route path="/borrow" element={<BorrowBookForm />} />
            <Route path="/return" element={<ReturnBookForm />} />
        </Routes>
    );
}

export default App;
