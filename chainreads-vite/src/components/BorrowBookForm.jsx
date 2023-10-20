import React, { useState } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
// import { useStateContext } from "../context";
import { useNavigate } from "react-router-dom";

function BorrowBookForm() {
    const [bookId, setBookId] = useState("");
    // const { borrowBook, borrowBookLoading } = useStateContext();
    const navigate = useNavigate();

    const { contract } = useContract(
        "0xcf11276D52988755c51D238CB43f086a34E2cba6"
    );

    const { mutateAsync: borrowBook } = useContractWrite(
        contract,
        "borrowBook"
    );

    const call = async (_id) => {
        try {
            const data = await borrowBook({ args: [_id] });
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    };

    const handleBorrowBook = async () => {
        if (bookId !== "") {
            try {
                // await borrowBook(bookId);
                await call(bookId);
                navigate("/");
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
            <button onClick={handleBorrowBook}>Borrow Book</button>
        </div>
    );
}

export default BorrowBookForm;
