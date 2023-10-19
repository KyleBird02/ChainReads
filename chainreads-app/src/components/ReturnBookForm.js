import React, { useState } from "react";
import { useStateContext } from "../context";
import { useNavigate } from "react-router-dom";

function ReturnBookForm() {
    const [bookId, setBookId] = useState("");
    const { returnBook, returnBookLoading } = useStateContext();
    const navigate = useNavigate();

    const handleReturnBook = async () => {
        if (bookId !== "") {
            try {
                await returnBook(bookId);
                navigate("/");
                console.log("Book returned successfully!");
            } catch (error) {
                console.error("Error returning book:", error);
            }
        } else {
            alert("Please enter a book ID.");
        }
    };

    return (
        <div className="return-book-form">
            <input
                type="text"
                placeholder="Enter Book ID"
                value={bookId}
                onChange={(e) => setBookId(e.target.value)}
            />
            <button onClick={handleReturnBook} disabled={returnBookLoading}>
                {returnBookLoading ? "Returning..." : "Return Book"}
            </button>
        </div>
    );
}

export default ReturnBookForm;
