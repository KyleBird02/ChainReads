import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context";
import Navbar from "./Navbar";

function AddBookForm() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const { addBookCall, addBookLoading } = useStateContext();

    const handleAddBook = async (e) => {
        e.preventDefault();
        try {
            console.log("yes");
            await addBookCall(title, author);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="add-book-form">
                <h2>Add a New Book</h2>
                <form onSubmit={handleAddBook}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        disabled={addBookLoading}
                    />
                    <input
                        type="text"
                        placeholder="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        disabled={addBookLoading}
                    />
                    <button type="submit">
                        {addBookLoading ? "Adding..." : "Add Book"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddBookForm;
