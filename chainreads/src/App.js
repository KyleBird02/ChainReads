import React, { useState, useEffect } from "react";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";
import contract from "./contract";

function App() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Load books from the blockchain when the component mounts
        const loadBooks = async () => {
            const totalBooks = await contract.methods.totalBooks().call();
            const booksArray = [];
            for (let i = 1; i <= totalBooks; i++) {
                const book = await contract.methods.books(i).call();
                booksArray.push(book);
            }
            setBooks(booksArray);
        };

        loadBooks();
    }, []); // Empty dependency array ensures that it only runs once

    return (
        <div className="App">
            <h1>ChainReads: BookWorm Exchange</h1>
            <AddBookForm />
            <BookList books={books} />
        </div>
    );
}

export default App;
