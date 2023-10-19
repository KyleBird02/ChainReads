import React from "react";
import { useStateContext } from "../context";
import Navbar from "./Navbar";

function BookList() {
    const { books, isLoading } = useStateContext();

    return (
        <div>
            <Navbar />
            <div className="book-list">
                <h2>Available Books</h2>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book) => (
                                <tr key={book.id}>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default BookList;
