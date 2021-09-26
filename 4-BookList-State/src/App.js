import React from "react";
import Books from "./components/Books";
// CSS
import "./index.css";
import FImage from "./images/book.jpeg";
import SImage from "./images/lean-startup.png";
import TImage from "./images/zero-to-one.jpg";

// An array of objects to iterate over
const books = [
	{
		id: 1,
		img: FImage,
		desc: "Learn the habits of highly effective people with this amazing book that will get you up to speed on powerful and meaningful lessons to help you change yourself into the best version of yourself",
		title: "The 7 Habits Of Highly Effective People",
		author: "Stephen R. Covey",
	},
	{
		id: 2,
		img: SImage,
		desc: "This book is a book by Eric Ries describing his proposed lean startup strategy for startup companies.",
		title: "The Lean Startupn",
		author: "Eric Ries",
	},
	{
		id: 3,
		img: TImage,
		desc: "This is a 2014 book by the American entrepreneur and investor Peter Thiel co-written with Blake Masters. It is a condensed and updated version of a highly popular set of online notes taken by Masters for the CS183 class on startups, as taught by Thiel at Stanford University in Spring 2012.",
		title: "Zero to One: Notes on Startups, or How to Build the Future",
		author: "Peter Thiel with Blake Masters",
	},
];

const App = () => {
	return (
		<section className='bookList'>
			{books.map((books) => {
				return <Books key={books.id} {...books}></Books>;
			})}
		</section>
	);
};

export default App;
