import React from "react";

function BookList({ books }) {
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
