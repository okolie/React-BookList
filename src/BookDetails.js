import React, { useContext } from "react";
import { BookContext } from "./BookContext";

const BookDetails = (props) => {
	const { removeBook } = useContext(BookContext);
	return (
		<li onClick={() => removeBook(props.book.id)} className="booklist">
			<div className="title">
				<span>Title:</span> {props.book.title}
			</div>
			<div className="author">
				<span>Author:</span> {props.book.author}
			</div>
		</li>
	);
};

export default BookDetails;
