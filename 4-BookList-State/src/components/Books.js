import React from "react";

// Destructuring in the function parameter
const Books = ({img, desc, title, author}) => {
	// Attribute, eventHandler
	// onClick, onMouseOver
	const clickHandler = () => {
		alert('Hello, World!');
	}
	return (
		<div>
			<article className='book'>
				<img src={img} alt='' />
				<h5>{desc}</h5>
				<h1>{title}</h1>
				<h4>{author}</h4>
				<button type='button' onClick={clickHandler}>reference examnle</button>
			</article>
		</div>
	);
};

export default Books;
