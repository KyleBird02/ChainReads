import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useStateContext } from "../context";
import Navbar from "./Navbar";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

function AddBookForm() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    // const { addBookCall } = useStateContext();
    const { contract } = useContract(
        "0xcf11276D52988755c51D238CB43f086a34E2cba6"
    );
    const { mutateAsync: addBook, isLoading } = useContractWrite(
        contract,
        "addBook"
    );

    const call = async (title, author) => {
        try {
            console.log("Book being added:");
            console.log(title, author);
            const data = await addBook({ args: [title, author] });
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    };
    const handleAddBook = async (e) => {
        e.preventDefault();
        try {
            console.log("yes");
            await call(title, author);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            {/* <Navbar /> */}
            <div className="add-book-form">
                <h2>Add a New Book</h2>
                <form onSubmit={handleAddBook}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <button type="submit">Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default AddBookForm;
