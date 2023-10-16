import React, { useState } from "react";
import contract from "../contract";
import web3 from "../web3";

function BorrowBookForm() {
    const [bookId, setBookId] = useState("");

    const handleBorrowBook = async () => {
        if (bookId !== "") {
            const accounts = await web3.eth.getAccounts();
            const selectedAccount = accounts[0];
            await contract.methods.borrowBook(bookId).send({
                from: selectedAccount, // Replace with the user's Metamask address
            });
            // You can add a loading state or other UI updates here
        } else {
            // Handle empty input case
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
            <button onClick={handleBorrowBook}>Borrow Book</button>
        </div>
    );
}

export default BorrowBookForm;
