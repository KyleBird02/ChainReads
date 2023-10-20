import React from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import Navbar from "./Navbar";
import ill from "../assets/ill.png";
import LandingPage from "./LandingPage";

function BookList() {
  const { contract } = useContract(
    "0xcf11276D52988755c51D238CB43f086a34E2cba6"
  );
  const { data: books } = useContractRead(contract, "getAllBooks", []);

  if (!books) {
    return <p>Loading...</p>;
  }

  const availableBooks = books.filter((book) => book.isAvailable);

  if (availableBooks.length === 0) {
    return (
      <div>
        <Navbar />
        <div className="book-list">
          <h2>Oops! Looks like there are no books available at the moment.</h2>
        </div>
      </div>
    );
  }

  return (
    <>
      <LandingPage />
      <div className="text-container">
        <div className="book-list">
          <h2 className="sub-title">Available Books</h2>
          <div className="center">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {availableBooks.map((book) => (
                  <tr key={book.id}>
                    <td>{book.id.toNumber()}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default BookList;
