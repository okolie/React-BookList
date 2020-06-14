import React, { useContext, useState } from "react";
import { BookContext } from "./BookContext";

const BookForm = () => {
	const { addBook } = useContext(BookContext);
	const [author, setAuthor] = useState("");
	const [title, setTitle] = useState("");
	const handleSubmit = (event) => {
		event.preventDefault();
		// console.log(title, author);
		addBook(title, author);
		setTitle("");
		setAuthor("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<label>Title</label>
			<input
				type="text"
				onChange={(event) => setTitle(event.target.value)}
				value={title}
				placeholder="book title"
				required
			/>

			<label>Author</label>
			<input
				type="text"
				onChange={(event) => setAuthor(event.target.value)}
				value={author}
				placeholder="author"
				required
			/>
			<input type="submit" value="Submit Book Details" />
		</form>
	);
};

export default BookForm;
