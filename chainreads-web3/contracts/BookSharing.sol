// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract BookSharing {
    struct Book {
        uint256 id;
        address owner;
        string title;
        string author;
        bool isAvailable;
    }

    mapping(uint256 => Book) public books;
    uint256 public totalBooks;

    event BookAdded(uint256 indexed id, string title, string author, address owner);

    modifier bookExists(uint256 _id) {
        require(_id > 0 && _id <= totalBooks, "Invalid book ID");
        _;
    }

    modifier onlyOwner(uint256 _id) {
        require(msg.sender == books[_id].owner, "Only the owner can perform this action");
        _;
    }

    function addBook(string memory _title, string memory _author) external {
        totalBooks++;
        books[totalBooks] = Book(totalBooks, msg.sender, _title, _author, true);
        emit BookAdded(totalBooks, _title, _author, msg.sender);
    }

    function borrowBook(uint256 _id) external bookExists(_id) onlyOwner(_id) {
        require(books[_id].isAvailable, "Book is not available for borrowing");
        books[_id].isAvailable = false;
    }

    function returnBook(uint256 _id) external bookExists(_id) onlyOwner(_id) {
        require(!books[_id].isAvailable, "Book is already available");
        books[_id].isAvailable = true;
    }
}
