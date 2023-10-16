import React, { useState, useEffect } from "react";
import contract from "../contract";
import "../App.css";
import ill from '../assets/ill.png'

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      const totalBooks = await contract.methods.totalBooks().call();
      const booksArray = [];
      for (let i = 1; i <= totalBooks; i++) {
        const book = await contract.methods.books(i).call();
        booksArray.push(book);
      }
      setBooks(booksArray);
    };

    loadBooks();
  }, []); // Empty dependency array ensures that it only runs once

  return (
    <>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@200,700,400,600,300,500&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <div className="App">
        <div className="container">
          <div class="main-header">
            <nav>
              <li class="logo">ChainReads</li>
              <ul class="nav-list">
                <li class="nav-list-item">
                  <a href="#home">Home</a>
                </li>
                <li class="nav-list-item">
                  <a href="#about">
                    About <span class="orange-text">Us</span>
                  </a>
                </li>
                <li class="nav-list-item">
                  <a href="#team">
                    Our <span class="orange-text">Team</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <h1 className="main-title">A Secure Blockchain</h1>
          <h2 className="sub-title">For All Your Book Needs.</h2>
          <div className="img">
            <img src={ill} className="ill"/>
          </div>
          <h2>Available Books</h2>
          <ul>
            {books.map((book) => (
              <li key={book.id}>
                <strong>{book.title}</strong> by {book.author}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default BookList;
