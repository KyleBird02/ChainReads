import React, { useState } from "react";
import contract from "../contract";
import web3 from "../web3";

function AddBookForm() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleAddBook = async (e) => {
        e.preventDefault();
        try {
            const accounts = await web3.eth.getAccounts();
            const selectedAccount = accounts[0];
            await contract.methods.addBook(title, author).send({
                from: selectedAccount, // Replace with the user's Metamask address
            });
        } catch (error) {
            // Handle error
            console.error(error);
        }
        // You can add a loading state or other UI updates here
    };

    return (
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
    );
}

export default AddBookForm;
