import React, { useState, useEffect } from "react";
import contract from "../contract";

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
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
        <div className="book-list">
            <h2>Available Books</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;
