import React, { useState } from "react";
import { useStateContext } from "../context";

function BorrowBookForm() {
    const [bookId, setBookId] = useState("");
    const { borrowBook, borrowBookLoading } = useStateContext();

    const handleBorrowBook = async () => {
        if (bookId !== "") {
            try {
                await borrowBook(bookId);
                console.log("Book borrowed successfully!");
            } catch (error) {
                console.error("Error borrowing book:", error);
            }
        } else {
            alert("Please enter a book ID.");
        }
    };

    return (
        <div className="borrow-book-form">
            <input
                type="text"
                placeholder="Enter Book ID"
                value={bookId}
                onChange={(e) => setBookId(e.target.value)}
            />
            <button onClick={handleBorrowBook} disabled={borrowBookLoading}>
                {borrowBookLoading ? "Borrowing..." : "Borrow Book"}
            </button>
        </div>
    );
}

export default BorrowBookForm;
