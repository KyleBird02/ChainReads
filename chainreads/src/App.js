import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";
import contract from "./contract";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BookList />} />
                <Route path="/add" element={<AddBookForm />} />
            </Routes>
        </Router>
    );
}

export default App;
