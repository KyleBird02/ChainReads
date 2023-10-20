import React, { useState } from "react";
// import { useStateContext } from "../context";
import { useNavigate } from "react-router-dom";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

function ReturnBookForm() {
    const [bookId, setBookId] = useState("");
    // const { returnBook, returnBookLoading } = useStateContext();
    const navigate = useNavigate();

    const { contract } = useContract(
        "0xcf11276D52988755c51D238CB43f086a34E2cba6"
    );
    const { mutateAsync: returnBook } = useContractWrite(
        contract,
        "returnBook"
    );

    const call = async (_id) => {
        try {
            const data = await returnBook({ args: [_id] });
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    };

    const handleReturnBook = async () => {
        if (bookId !== "") {
            try {
                await call(bookId);
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
            <button onClick={handleReturnBook}>Return Book</button>
        </div>
    );
}

export default ReturnBookForm;
