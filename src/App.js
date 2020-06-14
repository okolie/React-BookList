import React, { useContext } from "react";
import ReactDOM from "react-dom";
import BookContextProvider, { BookContext } from "./BookContext";
import Navbar from "./Navbar";
import BookForm from "./BookForm";
// import "./Navbar.css";
import BookList from "./BookList";
const App = () => {
	return (
		<div className="App">
			<BookContextProvider>
				<Navbar />
				<BookList />
				<BookForm />
			</BookContextProvider>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
