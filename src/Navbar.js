import React, { useContext } from "react";
import { BookContext } from "./BookContext";
// import "./Navbar.css";

const Navbar = () => {
	const { books } = useContext(BookContext);
	return (
		<div className="navbar">
			<h1>Reading list</h1>
			<p>Total number of books: {books.length}</p>
		</div>
	);
};

export default Navbar;
