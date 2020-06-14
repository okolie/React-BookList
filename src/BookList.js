import React, { useContext } from "react";
import { BookContext } from "./BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
	const { books } = useContext(BookContext);
	return books.length ? (
		<div className="book">
			<ul>
				{books.map((book) => {
					return <BookDetails book={book} key={book.id} />;
				})}
			</ul>
		</div>
	) : (
		<div className="empty">No books available at the moment</div>
	);
};

export default BookList;
