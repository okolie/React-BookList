import React, { createContext, useState } from "react";
import { v1 as uuidv1 } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
	const [books, setBooks] = useState([
		{ title: "name of the wind", author: "patrick rothfuss", id: 1 },
		{ title: "the final empire", author: "brandon sanderson", id: 2 },
	]);

	const addBook = (bookTitle, bookAuthor) =>  setBooks([
			...books,
			{ title: bookTitle, author: bookAuthor, id: uuidv1() },
		]);
	;

	const removeBook = (id) => {
		return setBooks(books.filter((book) => book.id != id));
	};

	return (
		<BookContext.Provider value={{ books, addBook, removeBook }}>
			{props.children}
		</BookContext.Provider>
	);
};

export default BookContextProvider;
